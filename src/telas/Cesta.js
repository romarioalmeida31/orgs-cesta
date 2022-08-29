import React from "react";
import { Dimensions, StyleSheet, Image, Text, View } from "react-native";
import topo from "../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}> Detalhes da Cesta </Text>

      <View>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <Text>Fazenda De codigos</Text>
        <Text>
          Uma cesta de produtos selecionado da fazenda dos codigos direto pra
          sua casa com qualidade e sem bugs
        </Text>
        <Text>R$ 40,00</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
});
