import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { estadios } from "../data/mockData";
import { HomeStackParamList } from "../navigation/types";
import { COLORS, TYPOGRAPHY, SPACING } from "../theme";

type DetailScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "HomeDetail"
>;

const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { id, nombre } = route.params;

  // Find the stadium by id
  const estadio = useMemo(() => {
    return estadios.find((e) => e.id === id);
  }, [id]);

  // Handle case when stadium not found
  if (!estadio) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Estadio no encontrado</Text>
      </View>
    );
  }

  const handleAddToFavorites = () => {
    // TODO: Implement favorites logic
    alert(`✅ ${estadio.nombre} agregado a favoritos`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Image */}
      <Image source={{ uri: estadio.imagen }} style={styles.image} />

      {/* Favorite Button */}
      <Pressable
        style={styles.favoriteButton}
        onPress={handleAddToFavorites}
      >
        <Ionicons name="heart-outline" size={24} color={COLORS.error} />
      </Pressable>

      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>{estadio.nombre}</Text>

        {/* Location Badge */}
        <View style={styles.badge}>
          <Ionicons name="location" size={16} color={COLORS.primary} />
          <Text style={styles.badgeText}>
            {estadio.ciudad}, {estadio.pais}
          </Text>
        </View>

        {/* Info Grid */}
        <View style={styles.infoGrid}>
          {/* Info Item 1: Team */}
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons
                name="football"
                size={24}
                color={COLORS.secondary}
              />
            </View>
            <Text style={styles.infoLabel}>Equipo</Text>
            <Text style={styles.infoValue}>{estadio.equipo}</Text>
          </View>

          {/* Info Item 2: Capacity */}
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons
                name="people"
                size={24}
                color={COLORS.primary}
              />
            </View>
            <Text style={styles.infoLabel}>Capacidad</Text>
            <Text style={styles.infoValue}>
              {estadio.capacidad.toLocaleString()}
            </Text>
          </View>

          {/* Info Item 3: Construction */}
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons
                name="calendar"
                size={24}
                color={COLORS.success}
              />
            </View>
            <Text style={styles.infoLabel}>Construido</Text>
            <Text style={styles.infoValue}>{estadio.construccion}</Text>
          </View>

          {/* Info Item 4: Country */}
          <View style={styles.infoItem}>
            <View style={styles.infoIconContainer}>
              <Ionicons
                name="globe"
                size={24}
                color={COLORS.secondary}
              />
            </View>
            <Text style={styles.infoLabel}>País</Text>
            <Text style={styles.infoValue}>{estadio.pais}</Text>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información</Text>
          <Text style={styles.description}>
            {estadio.nombre} es un estadio deportivo ubicado en {estadio.ciudad}, {estadio.pais}. 
            Con una capacidad de {estadio.capacidad.toLocaleString()} espectadores, fue 
            construido en {estadio.construccion} y es el hogar de {estadio.equipo}.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.primaryButton}>
            <Ionicons name="ticket" size={20} color="#fff" />
            <Text style={styles.buttonText}>Comprar Entradas</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Ionicons name="map" size={20} color={COLORS.primary} />
            <Text style={styles.secondaryButtonText}>Ver Ubicación</Text>
          </Pressable>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: "100%",
    height: 250,
    backgroundColor: COLORS.border,
  },
  favoriteButton: {
    position: "absolute",
    top: SPACING.lg,
    right: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderRadius: 50,
    padding: SPACING.md,
    elevation: 5,
    shadowColor: COLORS.text,
    shadowOpacity: 0.2,
    shadowRadius: SPACING.md,
  },
  content: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
  },
  title: {
    ...TYPOGRAPHY.headerLarge,
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: SPACING.md,
    marginBottom: SPACING.lg,
    alignSelf: "flex-start",
  },
  badgeText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    marginLeft: SPACING.sm,
    fontWeight: "600",
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: SPACING.xl,
    gap: SPACING.md,
  },
  infoItem: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: COLORS.surface,
    padding: SPACING.md,
    borderRadius: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },
  infoIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SPACING.sm,
  },
  infoLabel: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  infoValue: {
    ...TYPOGRAPHY.headerSmall,
    color: COLORS.text,
    textAlign: "center",
  },
  section: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    ...TYPOGRAPHY.headerSmall,
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },
  description: {
    ...TYPOGRAPHY.bodyMedium,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  buttonContainer: {
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.lg,
    borderRadius: SPACING.md,
    gap: SPACING.md,
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowRadius: SPACING.md,
  },
  secondaryButton: {
    backgroundColor: COLORS.surface,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SPACING.lg,
    borderRadius: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.primary,
    gap: SPACING.md,
  },
  buttonText: {
    ...TYPOGRAPHY.bodyLarge,
    color: "#fff",
    fontWeight: "600",
  },
  secondaryButtonText: {
    ...TYPOGRAPHY.bodyLarge,
    color: COLORS.primary,
    fontWeight: "600",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  errorText: {
    ...TYPOGRAPHY.headerMedium,
    color: COLORS.error,
  },
  spacer: {
    height: SPACING.xl,
  },
});

export default DetailScreen;
