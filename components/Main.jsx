import { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";
import { getLatestGames } from "../lib/metacritic";

export function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <>
      <ScrollView>
        {games.map((game) => (
          <View key={game.slug} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
            <Text style={styles.score}>{game.score}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "#eee",
    fontSize: 16,
    marginTop: 5,
  },
  score: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
