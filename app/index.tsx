

import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

interface Pokemon {
  name:string,
  url:string
}
export default function Index() {

  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
useEffect(()=>{
    fectchPokemon();
},[])

useEffect(()=>{
    console.log(pokemon);
},[pokemon])

  async function fectchPokemon() {
    const response=await fetch("https://pokeapi.co/api/v2/pokemon");
    const data=await response.json();
     setPokemon(data.results);
   }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>pokemon</Text>
         <ScrollView>
             {pokemon.map((pokemon: Pokemon)=>{
                 return(
                     <Text key={pokemon.name}>{pokemon.name}</Text>
                 )
             })}
         </ScrollView>
    </View>
  );
}
