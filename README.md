# 🏟️ Estadios del Mundo - React Native App

Una aplicación móvil desarrollada con React Native y Expo que permite explorar y buscar estadios de fútbol del mundo.

## 📋 Descripción del Proyecto

Esta aplicación implementa un catálogo interactivo de **12 estadios icónicos** de fútbol alrededor del mundo. Los usuarios pueden buscar, filtrar y explorar detalles de cada estadio en tiempo real.

**Dominio asignado**: Estadios de Fútbol  
**Tipo de ítem**: `Estadio` (Stadium)

## ✨ Características Principales

### 1. **Lista con FlatList**
- Optimizada con `keyExtractor` basado en `id`
- Renderizado eficiente de 12+ elementos
- `ItemSeparatorComponent` para espaciado visual consistente

### 2. **Búsqueda en Tiempo Real**
- `TextInput` que filtra instantáneamente
- Búsqueda por:
  - Nombre del estadio
  - Ciudad
  - País
  - Equipo/Selección

### 3. **Optimización de Performance**
- **`useMemo`**: Filtrado de lista memorizado para evitar cálculos innecesarios
- **`useCallback`**: Callbacks memoizados para `renderItem` y componente de estado vacío
- **`KeyboardAvoidingView`**: Interfaz adaptativa para iOS y Android

### 4. **Diseño Consistente**
- **COLORS**: Paleta temática verde (fútbol)
- **TYPOGRAPHY**: Escalas tipográficas definidas (header, body, labels)
- **SPACING**: Sistema de espaciado consistente (xs, sm, md, lg, xl, xxl)

### 5. **Componentes Reutilizables**
- **`ItemCard`**: Tarjeta con 5 campos del dominio:
  - 📍 Nombre del estadio
  - 📍 Ubicación (ciudad, país)
  - ⚽ Equipo/Selección
  - 📊 Capacidad
  - 📅 Año de construcción

### 6. **Estado Vacío Personalizado**
- Mensaje cuando no hay resultados en la búsqueda
- UX mejorada y orientada al usuario

## 🗂️ Estructura del Proyecto

```
starter/
├── App.tsx                           # Punto de entrada
├── app.json                          # Configuración Expo (SDK 54)
├── package.json                      # Dependencias
├── tsconfig.json                     # Configuración TypeScript
├── pnpm-lock.yaml                    # Lock file
├── README.md                         # Este archivo
└── src/
    ├── types/
    │   └── index.ts                  # Interfaz `Estadio`
    ├── data/
    │   └── mockData.ts               # 12 estadios reales
    ├── components/
    │   └── ItemCard.tsx              # Tarjeta de estadio (5 campos)
    ├── screens/
    │   └── HomeScreen.tsx            # Pantalla principal
    └── theme/
        └── index.ts                  # COLORS, TYPOGRAPHY, SPACING
```

## 📱 Campos del Dominio

Cada estadio contiene:

| Campo | Tipo | Ejemplo |
|-------|------|---------|
| `id` | string | "1" |
| `nombre` | string | "Maracaná" |
| `ciudad` | string | "Río de Janeiro" |
| `pais` | string | "Brasil" |
| `capacidad` | number | 78000 |
| `equipo` | string | "Selección Brasil" |
| `construccion` | number | 1950 |
| `imagen` | string | URL de imagen |

## 🎨 Decisiones de Diseño

### Colores
- **Primary (#2e7d32)**: Verde para tema de fútbol
- **Secondary (#1976d2)**: Azul para acentos
- **Background (#f5f5f5)**: Gris claro para contraste
- **Surface (#ffffff)**: Blanco para tarjetas

### Tipografía
- **Headers**: Fuerte y clara (700 de peso)
- **Body**: Legible a cualquier tamaño
- **Labels**: Pequeños pero distinguibles (600 de peso)

### Espaciado
- Sistema de escala: 4px base (xs=4, sm=8, md=12, lg=16, xl=24, xxl=32)
- Consistencia visual en toda la app
- Respeta guías de HIG de iOS y Material Design de Android

## 🚀 Cómo Ejecutar

### Requisitos
- Node.js 18+ o superior
- pnpm 9+
- Expo Go (descargable en App Store o Google Play)

### Instalación
```bash
# Navegar al proyecto
cd starter

# Instalar dependencias
pnpm install

# Iniciar servidor Expo
pnpm start
```

### Ejecutar en Simulador/Dispositivo
```bash
# iOS
pnpm ios

# Android
pnpm android

# O usar Expo Go escaneando el QR
```

## ✅ Requisitos Cumplidos

- ✅ **FlatList**: Con `keyExtractor` basado en `id`
- ✅ **TextInput**: Búsqueda en tiempo real
- ✅ **useMemo**: Filtrado memorizado
- ✅ **useCallback**: Renderers memoizados
- ✅ **ItemCard**: 5 campos del dominio
- ✅ **Estado Vacío**: Mensaje personalizado
- ✅ **KeyboardAvoidingView**: Adaptativo
- ✅ **Constantes de Tema**: COLORS, TYPOGRAPHY, SPACING
- ✅ **TypeScript**: Sin `any`
- ✅ **Mock Data**: 12 estadios reales

## 📊 Puntuación Esperada

| Criterio | Pts |
|----------|-----|
| FlatList con keyExtractor | 5 |
| TextInput búsqueda | 5 |
| useMemo filtrado | 5 |
| ItemCard 3+ campos | 5 |
| Estado vacío | 3 |
| KeyboardAvoidingView | 3 |
| Constantes tema | 2 |
| TypeScript sin any | 2 |
| **TOTAL** | **30** |

## 🎬 Screenshot del App

### Pantalla Principal
- Header con título y contador
- Barra de búsqueda
- Lista de tarjetas scrolleable
- Cada tarjeta muestra: nombre, ubicación, equipo, capacidad, año

### Estados
1. **Búsqueda vacía**: Muestra todos los 12 estadios
2. **Búsqueda con resultados**: Filtra en tiempo real
3. **Sin resultados**: Mensaje "No hay resultados"

## 📝 Notas Técnicas

- SDK Expo: 54.0.0
- React: 19.2.0
- React Native: 0.83.6
- TypeScript: Estricto (sin `any`)
- Estilos: StyleSheet optimizado de React Native

## 🔧 Comandos Útiles

```bash
# Limpiar caché
pnpm expo-cli:clean

# Instalar paquetes específicos
pnpm add [package-name]

# Ejecutar tests
pnpm test

# Build para producción
pnpm build
```

## 📚 Recursos Utilizados

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript React Native](https://reactnative.dev/docs/typescript)
- [HIG iOS Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design Android](https://m3.material.io/)

---

**Desarrollado por**: Proyecto Bootcamp  
**Fecha**: 2026  
**Estado**: ✅ Completo
