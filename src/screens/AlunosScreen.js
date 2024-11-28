import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { getFichas } from "../utils/AsyncStorageUtils";
import { PermissionsAndroid } from "react-native";

async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Permissão para acessar o armazenamento",
        message: "O app precisa acessar o armazenamento para salvar arquivos.",
        buttonNeutral: "Perguntar depois",
        buttonNegative: "Cancelar",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Permissão concedida");
    } else {
      console.log("Permissão negada");
    }
  } catch (err) {
    console.warn(err);
  }
}

const AlunosScreen = ({ navigation, route }) => {
  const { selectedDay, selectedTime } = route.params;
  const [alunosFiltrados, setAlunosFiltrados] = useState([]);

  useEffect(() => {
    const carregarAlunos = async () => {
      const fichas = await getFichas();
      const filtrados = fichas.filter((ficha) =>
        selectedDay ? ficha.diasDeTreino[selectedDay] === selectedTime : true
      );
      setAlunosFiltrados(filtrados);
    };

    carregarAlunos();
  }, [selectedDay, selectedTime]);

  return (
    <View style={styles.container}>
      {alunosFiltrados.length > 0 ? (
        alunosFiltrados.map((aluno) => (
          <TouchableOpacity
            key={aluno.nome}
            style={styles.button}
            onPress={() => navigation.navigate("Ficha", { ficha: aluno })}
          >
            <Text style={styles.buttonText}>{aluno.nome}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Nenhum aluno encontrado</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#f8f8f8",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 5,
    width: "99%",
    height: 85,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    color: "#000000",
  },
});

export default AlunosScreen;
