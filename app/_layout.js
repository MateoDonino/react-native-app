import { View } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />
      <Slot />
    </View>
  );
}
