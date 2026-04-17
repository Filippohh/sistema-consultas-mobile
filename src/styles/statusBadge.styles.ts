import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16, // Deixa as bordas bem arredondadas, estilo "pílula"
    alignSelf: "flex-start", // Impede que a etiqueta ocupe a largura inteira da tela
    marginBottom: 16, // Dá um respiro entre a etiqueta e as informações abaixo dela
    backgroundColor: "#2196F3", // Cor padrão (Azul) para o status "agendada"
  },
  confirmada: {
    backgroundColor: "#4CAF50", // Verde para sucesso
  },
  cancelada: {
    backgroundColor: "#F44336", // Vermelho para cancelamento
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.5, // Dá um leve espaçamento nas letras que estão em maiúsculo
  },
});