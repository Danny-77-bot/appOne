import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  name: string;
  image: string;
  imageBack: string;
  types: PokemonType[];
}

const colorTypes: Record<string, string> = {
  water: '#6390F0',
  fire: '#F08030',
  grass: '#7AC74C',
  bug: '#A6B91A',
};

export default function Index() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(()=>{
    console.log(pokemon)
  })

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
            imageBack: details.sprites.back_default,
            types: details.types,
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
          <View style={[styles.card, { backgroundColor: colorTypes[item.types[0].type.name] || 'orange' }]}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />

              <Image
                source={{ uri: item.imageBack }}
                style={styles.image}
              />
            </View>

            <Text style={styles.name}>
              {item.name.charAt(0).toUpperCase() +
                item.name.slice(1)}
            </Text>

            <View style={styles.typesContainer}>
              {item.types.map((pokemonType) => (
                <View
                  key={pokemonType.slot}
                  style={styles.typeBadge}
                >
                  <Text style={styles.typeText}>
                    {pokemonType.type.name}
                  </Text>
                </View>
              ))}
            </View>
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
    fontSize: 32,
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
    padding: 20,
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
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2A2A2A",
    borderRadius: 20,
    padding: 10,
    marginBottom: 12,
  },

  image: {
    width: 120,
    height: 120,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
  },

  typeBadge: {
    backgroundColor: "#FFCB05",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
  },

  typeText: {
    color: "#121212",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});