// Navigation type definitions

import { NavigatorScreenParams } from "@react-navigation/native";

// Stack params for Home tab
export type HomeStackParamList = {
  HomeList: undefined;
  HomeDetail: {
    id: string;
    nombre: string;
  };
};

// Root Tab params
export type RootTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Favorites: undefined;
};

// Declare global navigation types
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}
