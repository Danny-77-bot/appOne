
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
interface Pokemon {
  name: string;
  url: string;
}
export default function Index() {
  const [pokemonData,setPokemonData]=useState<Pokemon[]>([]);
useEffect (()=>{
     fetchPokemon();  
},[])
 
 
useEffect (()=>{
    console.log(pokemonData)
},[pokemonData])

  async function fetchPokemon () {
    const response= await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const data=await response.json();
      return setPokemonData(data.results);
  }


      const renderItem = ({ item }:{item:Pokemon }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
        </View>
      );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>pokemon</Text>
        <FlatList
        data={pokemonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
     
        />
    </View>
  );
}
