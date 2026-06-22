import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Pokemon {
  name: string;
  image: string;
}

export default function Index() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon"
      );
      const data = await response.json();

      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();

          return {
            name: pokemon.name,
            image: details.sprites.front_default,
          };
        })
      );

      setPokemon(detailedPokemon);
    } catch (error) {
      console.error("Error fetching pokemon:", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>

      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
            </View>

            <Text style={styles.name}>
              {item.name.charAt(0).toUpperCase() +
                item.name.slice(1)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 40,
  },

  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: "#FFCB05",
    textAlign: "center",
    marginBottom: 20,
  },

  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 30,
    marginBottom: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  imageContainer: {
    backgroundColor: "#2A2A2A",
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  image: {
    width: 140,
    height: 140,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
});