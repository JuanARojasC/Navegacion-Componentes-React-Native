import { ScrollView, StyleSheet, Alert, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  const mostrarDetalle = (hobby: string, detalle: string) => {
    Alert.alert(`Detalle de ${hobby}`, detalle);
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.grid}>
        <TarjetaHobby 
          nombre="Música" 
          icono="musical-notes" 
          onPress={() => mostrarDetalle("Música", "Disfruto del Hardcore, J-Pop,indie .")} 
        />
        <TarjetaHobby 
          nombre="Fútbol Europeo" 
          icono="football" 
          onPress={() => mostrarDetalle("Fútbol", "Sigo la Premier League y la Champions League")} 
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  grid: { gap: 10 },
});