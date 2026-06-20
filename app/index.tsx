

import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

interface Pokemon {
  name:string,
  image:string
}
export default function Index() {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
useEffect(()=>{
    fetchPokemon();
},[])






useEffect(()=>{
    console.log(pokemon);
},[pokemon])

  async function fetchPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();

//fetch detailed info for each pokemon in parallel
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{margin: 10, fontSize: 24, fontWeight: "bold" }}>pokemon</Text>
         <ScrollView>
             {pokemon.map((pokemon)=>{
                 return(
                    <View key={pokemon.name} style={{margin:10, alignItems:"center"}}>
                        <Text style={{fontSize: 18, fontWeight: "bold" }}>{pokemon.name}</Text>
                        <Image 
                        source={{uri:pokemon.image}} style={{width:200, height:200}} />
                    </View>
                 )
             })}
         </ScrollView>
    </View>
  );
}
