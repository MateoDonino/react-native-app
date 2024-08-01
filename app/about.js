import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/">
        <Pressable>
          {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
      </Text>
      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
      </Text>
    </ScrollView>
  );
}
