import { Text, View } from "react-native";
import InputTexto from "./components/Input";


export default function Index() {
  return (
    <View>
      <InputTexto legenda="E-mail" isPassword={false}/>
      <InputTexto legenda="CPF" isPassword={false}/>
      <InputTexto legenda="Senha" isPassword={true}/>
    </View>

  );
}
