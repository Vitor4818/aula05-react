import { Text, View, Image } from "react-native";
export default function ProfileCard(props) {
  return (
    <View>
        <Text>Nome: {props.nome}</Text>
        <Text>idade: {props.idade}</Text>
        <Text>Profissão: {props.job}</Text>
        <Image
        source={{
          uri: 'https://s3.static.brasilescola.uol.com.br/be/2023/09/1-escudo-do-corinthians.jpg',
        }}
      />



    </View>
  );
}
