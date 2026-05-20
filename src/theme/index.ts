// Theme constants for consistent styling across the app

export const COLORS = {
  primary: '#2e7d32',      // Green for sports theme
  secondary: '#1976d2',    // Blue accent
  background: '#f5f5f5',   // Light gray background
  surface: '#ffffff',      // White cards
  text: '#212121',         // Dark text
  textSecondary: '#757575', // Gray text
  border: '#e0e0e0',       // Light border
  success: '#4caf50',      // Green
  error: '#f44336',        // Red
  disabled: '#bdbdbd',     // Disabled state
};

export const TYPOGRAPHY = {
  headerLarge: {
    fontSize: 28,
    fontWeight: '700' as const,
    lineHeight: 36,
  },
  headerMedium: {
    fontSize: 24,
    fontWeight: '700' as const,
    lineHeight: 32,
  },
  headerSmall: {
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 26,
  },
  bodyLarge: {
    fontSize: 16,
    fontWeight: '500' as const,
    lineHeight: 24,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '600' as const,
    lineHeight: 16,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};
