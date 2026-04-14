import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Consulta } from "../interfaces/consulta";
import { ConsultaCard } from "../components";
import { styles } from "../styles/app.styles";
import { consultaInicial } from "../data/initialData";

export default function Home() {
  const [consulta, setConsulta] = useState<Consulta>(consultaInicial);

  function confirmarConsulta() {
    setConsulta((prev) => ({ ...prev, status: "confirmada" }));
  }

  function cancelarConsulta() {
    setConsulta((prev) => ({ ...prev, status: "cancelada" }));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Sistema de Consultas</Text>
          <Text style={styles.subtitulo}>Consulta #{consulta.id}</Text>
        </View>

        <ConsultaCard
          consulta={consulta}
          onConfirmar={confirmarConsulta}
          onCancelar={cancelarConsulta}
        />
      </ScrollView>
    </View>
  );
}