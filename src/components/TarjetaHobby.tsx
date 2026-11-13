import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  nombre: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function TarjetaHobby({ nombre, icono, onPress }: Props) {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress}>
      <Ionicons name={icono} size={32} color="#ec4899" />
      <Text style={estilos.nombre}>{nombre}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tarjeta: { 
    backgroundColor: "#fff", 
    padding: 20, 
    borderRadius: 10, 
    marginVertical: 8, 
    alignItems: "center",
    elevation: 2 
  },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#1e293b", marginTop: 8 },
});