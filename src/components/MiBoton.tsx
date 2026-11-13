import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({ textoBoton, nombreIcono, colorBoton, onPress }: Props) {
  return (
    <TouchableOpacity style={[estilos.boton, { backgroundColor: colorBoton }]} onPress={onPress}>
      <Ionicons name={nombreIcono} size={24} color="#fff" style={estilos.icono} />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  icono: { marginRight: 8 },
  texto: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});