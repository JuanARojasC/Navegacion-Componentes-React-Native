import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number | string;
  enCurso: boolean;
};

export default function TarjetaEstudio({ titulo, institucion, anio, enCurso }: Props) {
  return (
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <View style={estilos.header}>
        <Text style={estilos.titulo}>{titulo}</Text>
        {enCurso && (
          <View style={estilos.capsula}>
            <Text style={estilos.badgeText}>En Curso</Text>
          </View>
        )}
      </View>
      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: { padding: 16, borderRadius: 10, marginVertical: 8, borderWidth: 1 },
  finalizado: { backgroundColor: "#ffffff", borderColor: "#ccc" },
  enCurso: { backgroundColor: "#eef2ff", borderColor: "#6366f1" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
  titulo: { fontSize: 16, fontWeight: "bold", flex: 1 },
  subtitulo: { fontSize: 14, color: "#555", marginBottom: 4 },
  anio: { fontSize: 12, color: "#888" },
  capsula: {
    backgroundColor: "#8b5cf6", // Fondo morado
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeText: { color: "#ffffff", fontWeight: "bold", fontSize: 10 },
});