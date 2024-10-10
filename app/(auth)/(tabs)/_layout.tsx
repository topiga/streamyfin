import * as NavigationBar from "expo-navigation-bar";
import React, { useEffect } from "react";
import { Platform } from "react-native";

import { withLayoutContext } from "expo-router";

import {
  createNativeBottomTabNavigator,
  NativeBottomTabNavigationEventMap,
} from "react-native-bottom-tabs/react-navigation";

const { Navigator } = createNativeBottomTabNavigator();

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import type {
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";

export const NativeTabs = withLayoutContext<
  BottomTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#121212");
      NavigationBar.setBorderColorAsync("#121212");
    }
  }, []);

  return (
    <NativeTabs sidebarAdaptable ignoresTopSafeArea>
      <NativeTabs.Screen redirect name="index" />
      <NativeTabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => ({ sfSymbol: "house" }),
        }}
      />
      <NativeTabs.Screen
        name="(search)"
        options={{
          title: "Search",
          tabBarIcon: () => ({ sfSymbol: "magnifyingglass" }),
        }}
      />
      <NativeTabs.Screen
        name="(libraries)"
        options={{
          title: "Library",
          tabBarIcon: () => ({ sfSymbol: "server.rack" }),
        }}
      />
    </NativeTabs>
  );
}
