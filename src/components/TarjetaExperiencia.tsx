import { StyleSheet, Text, View } from "react-native";

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({ cargo, empresa, periodo, descripcion }: Props) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.cargo}>{cargo}</Text>
      <Text style={estilos.empresa}>{empresa} | {periodo}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: { backgroundColor: "#fff", padding: 16, borderRadius: 10, marginVertical: 8, elevation: 2 },
  cargo: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  empresa: { fontSize: 14, color: "#2563eb", marginVertical: 4, fontWeight: "500" },
  descripcion: { fontSize: 14, color: "#475569", marginTop: 4 },
});