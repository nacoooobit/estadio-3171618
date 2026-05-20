import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Estadio } from "../types";
import { COLORS, TYPOGRAPHY, SPACING } from "../theme";

interface Props {
  estadio: Estadio;
}

const ItemCard: React.FC<Props> = ({ estadio }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: estadio.imagen }} 
        style={styles.image}
      />
      
      <View style={styles.content}>
        {/* Title - Campo 1 */}
        <Text style={styles.title} numberOfLines={2}>
          {estadio.nombre}
        </Text>
        
        {/* Location - Campo 2 */}
        <Text style={styles.location}>
          📍 {estadio.ciudad}, {estadio.pais}
        </Text>
        
        {/* Team - Campo 3 */}
        <Text style={styles.team}>
          ⚽ {estadio.equipo}
        </Text>
        
        {/* Capacity - Campo 4 */}
        <View style={styles.row}>
          <Text style={styles.label}>Capacidad:</Text>
          <Text style={styles.value}>
            {estadio.capacidad.toLocaleString()}
          </Text>
        </View>
        
        {/* Construction Year - Campo 5 */}
        <View style={styles.row}>
          <Text style={styles.label}>Construido:</Text>
          <Text style={styles.value}>{estadio.construccion}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: SPACING.md,
    marginBottom: SPACING.lg,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.text,
    shadowOpacity: 0.1,
    shadowRadius: SPACING.md,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
  },
  title: {
    ...TYPOGRAPHY.headerSmall,
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  location: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  team: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.secondary,
    marginBottom: SPACING.md,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SPACING.xs,
  },
  label: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    fontWeight: "600",
  },
  value: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    fontWeight: "500",
  },
});

export default ItemCard;
