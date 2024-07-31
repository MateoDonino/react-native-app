import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GamesCard";

export function Main() {
  const [games, setGames] = useState([]);
  const instets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <>
      <View style={{ paddingTop: instets.top, paddingBottom: instets.bottom }}>
        <ScrollView>
          {games.length === 0 ? (
            <ActivityIndicator />
          ) : (
            games.map((game) => <GameCard key={game.slug} game={game} />)
          )}
        </ScrollView>
      </View>
    </>
  );
}
