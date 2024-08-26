import { TextInput, StyleSheet, Image, View } from "react-native";
import { estilo } from "./style";

interface InputProps {
    legenda: string;
    isPassword: boolean;
}


export default function InputTexto({ legenda, isPassword }: InputProps) {
    return (
        <View>
            {/*Imagem*/}
        <Image source={require("../caminho/imagem.png")}/>
        <TextInput style={estilo.input} secureTextEntry={isPassword} placeholder={legenda} />
        </View>
    )
}



