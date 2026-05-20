import React, { useCallback } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Estadio } from "../types";
import { COLORS, TYPOGRAPHY, SPACING } from "../theme";

// Favorite stadiums (static for now)
const favoritesData: Estadio[] = [
  {
    id: "5",
    nombre: "Camp Nou",
    ciudad: "Barcelona",
    pais: "España",
    capacidad: 99000,
    equipo: "FC Barcelona",
    construccion: 1957,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Camp_Nou.jpg",
  },
  {
    id: "10",
    nombre: "Estadio Santiago Bernabéu",
    ciudad: "Madrid",
    pais: "España",
    capacidad: 81044,
    equipo: "Real Madrid",
    construccion: 1947,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Estadio_Santiago_Bernabeu.jpg",
  },
  {
    id: "4",
    nombre: "Maracaná",
    ciudad: "Río de Janeiro",
    pais: "Brasil",
    capacidad: 78000,
    equipo: "Selección Brasil",
    construccion: 1950,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Maracana_stad.jpg",
  },
];

interface FavoriteCardProps {
  estadio: Estadio;
  onRemove: (id: string) => void;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ estadio, onRemove }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{estadio.nombre}</Text>
        <View style={styles.cardRow}>
          <Ionicons name="location" size={14} color={COLORS.textSecondary} />
          <Text style={styles.cardSubtitle}>
            {estadio.ciudad}, {estadio.pais}
          </Text>
        </View>
        <View style={styles.cardRow}>
          <Ionicons name="people" size={14} color={COLORS.textSecondary} />
          <Text style={styles.cardSubtitle}>
            Cap: {estadio.capacidad.toLocaleString()}
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.removeButton}
        onPress={() => onRemove(estadio.id)}
      >
        <Ionicons name="close" size={20} color={COLORS.error} />
      </Pressable>
    </View>
  );
};

const FavoritesScreen: React.FC = () => {
  const [favorites, setFavorites] = React.useState(favoritesData);

  const handleRemove = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Estadio }) => (
      <FavoriteCard estadio={item} onRemove={handleRemove} />
    ),
    [handleRemove]
  );

  const keyExtractor = (item: Estadio): string => item.id;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>❤️ Mis Favoritos</Text>
        <Text style={styles.subtitle}>
          {favorites.length} estadio{favorites.length !== 1 ? "s" : ""}
        </Text>
      </View>

      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="heart-outline"
            size={64}
            color={COLORS.textSecondary}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>Sin favoritos aún</Text>
          <Text style={styles.emptySubtitle}>
            Agrega estadios a favoritos desde la pantalla de detalles
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          scrollEnabled
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  title: {
    ...TYPOGRAPHY.headerLarge,
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    gap: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: SPACING.md,
    padding: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 2,
    shadowColor: COLORS.text,
    shadowOpacity: 0.1,
    shadowRadius: SPACING.md,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    ...TYPOGRAPHY.headerSmall,
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.xs,
    gap: SPACING.sm,
  },
  cardSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textSecondary,
  },
  removeButton: {
    padding: SPACING.md,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
  },
  emptyIcon: {
    marginBottom: SPACING.lg,
    opacity: 0.5,
  },
  emptyTitle: {
    ...TYPOGRAPHY.headerMedium,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  emptySubtitle: {
    ...TYPOGRAPHY.bodyMedium,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});

export default FavoritesScreen;
