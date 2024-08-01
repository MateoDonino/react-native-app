import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { View, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GamesCard";
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const instets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <View style={{ paddingTop: instets.top, paddingBottom: instets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>

      <Link href="/about" className="text-blue-400 text-xl">
        Ir al about
      </Link>

      {games.length === 0 ? (
        <ActivityIndicator color={"yellow"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
