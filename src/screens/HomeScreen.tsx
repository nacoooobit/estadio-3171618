import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  FlatList,
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { estadios } from "../data/mockData";
import { Estadio } from "../types";
import ItemCard from "../components/ItemCard";
import { COLORS, TYPOGRAPHY, SPACING } from "../theme";
import { HomeStackParamList } from "../navigation/types";

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, "HomeList">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState<string>("");

  // useMemo: Filter stadiums based on search text
  const filteredEstadios = useMemo(() => {
    if (!searchText.trim()) {
      return estadios;
    }
    
    const query = searchText.toLowerCase();
    return estadios.filter(
      (estadio) =>
        estadio.nombre.toLowerCase().includes(query) ||
        estadio.ciudad.toLowerCase().includes(query) ||
        estadio.pais.toLowerCase().includes(query) ||
        estadio.equipo.toLowerCase().includes(query)
    );
  }, [searchText]);

  // useCallback: Render individual item card
  const renderItem = useCallback(
    ({ item }: { item: Estadio }) => (
      <Pressable
        onPress={() =>
          navigation.navigate("HomeDetail", {
            id: item.id,
            nombre: item.nombre,
          })
        }
      >
        <ItemCard estadio={item} />
      </Pressable>
    ),
    [navigation]
  );

  // useCallback: Render empty state
  const renderEmptyState = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No hay resultados</Text>
        <Text style={styles.emptySubtitle}>
          No encontramos estadios que coincidan con "{searchText}"
        </Text>
      </View>
    ),
    [searchText]
  );

  // Key extractor using item id
  const keyExtractor = (item: Estadio): string => item.id;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>🏟️ Estadios del Mundo</Text>
        <Text style={styles.subtitle}>
          {filteredEstadios.length} de {estadios.length} estadios
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nombre, ciudad, país o equipo..."
          placeholderTextColor={COLORS.textSecondary}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredEstadios}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={renderEmptyState}
        scrollEnabled
      />
    </KeyboardAvoidingView>
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
  searchContainer: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  searchInput: {
    ...TYPOGRAPHY.bodyMedium,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SPACING.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    color: COLORS.text,
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
  },
  separator: {
    height: 0,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.lg,
    marginTop: 50,
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

export default HomeScreen;
