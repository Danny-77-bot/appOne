import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}