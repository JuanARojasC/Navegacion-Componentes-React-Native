import { ScrollView, StyleSheet } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <TarjetaExperiencia 
        cargo="Aprendiz SENA " 
        empresa="EssilorLuxottica Servioptica" 
        periodo="2026" 
        descripcion="Empresa encargada de la creacion de marcos y gafas personalizadas" 
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
});