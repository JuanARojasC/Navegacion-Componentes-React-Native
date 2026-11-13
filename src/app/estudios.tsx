import { ScrollView, StyleSheet } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <TarjetaEstudio 
        titulo="Tecnólogo en Desarrollo de Software" 
        institucion="SENA" 
        anio="2026 - Presente" 
        enCurso={true} 
      />
      <TarjetaEstudio 
        titulo="Técnico en Desarrollo de Software" 
        institucion="SENA" 
        anio="2024 - 2025" 
        enCurso={false} 
      />
      <TarjetaEstudio 
        titulo="Bachiller Académico" 
        institucion="Institución Educativa" 
        anio="2025" 
        enCurso={false} 
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
});