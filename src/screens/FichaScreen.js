import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { saveFichas, getFichas, deleteFicha } from "../utils/AsyncStorageUtils";
import Icon from "react-native-vector-icons/Feather";

const FichaScreen = ({ route, navigation }) => {
  const { ficha: fichaInicial } = route.params || {};
  const [ficha, setFicha] = useState(
    fichaInicial || {
      nome: "",
      idade: "",
      restricoes: "",
      aquecimento: {},
      aerobio: {},
      circuito: {},
      estacao: {},
      pesosLivres: {},
      solo: {},
      observacoes: "",
      diasDeTreino: {
        SEG: "",
        TER: "",
        QUA: "",
        QUI: "",
        SEX: "",
      },
      diaDeAerobio: "",
    }
  );

  const [modalVisible, setModalVisible] = useState(false);

  const horarios = [
    { label: "06:00", value: "06:00" },
    { label: "06:30", value: "06:30" },
    { label: "07:00", value: "07:00" },
    { label: "07:30", value: "07:30" },
    { label: "08:00", value: "08:00" },
    { label: "08:30", value: "08:30" },
    { label: "09:00", value: "09:00" },
    { label: "09:30", value: "09:30" },
    { label: "10:00", value: "10:00" },
    { label: "15:00", value: "15:00" },
    { label: "15:30", value: "15:30" },
    { label: "16:00", value: "16:00" },
    { label: "16:30", value: "16:30" },
    { label: "17:00", value: "17:00" },
    { label: "17:30", value: "17:30" },
    { label: "18:00", value: "18:00" },
    { label: "18:30", value: "18:30" },
    { label: "19:00", value: "19:00" },
    { label: "19:30", value: "19:30" },
    { label: "20:00", value: "20:00" },
  ];

  const diasDaSemana = [
    { label: "SEG", value: "SEG" },
    { label: "TER", value: "TER" },
    { label: "QUA", value: "QUA" },
    { label: "QUI", value: "QUI" },
    { label: "SEX", value: "SEX" },
  ];

  useEffect(() => {
    if (fichaInicial) {
      setFicha(fichaInicial);
    }
  }, [fichaInicial]);

  const salvarFicha = async () => {
    const fichas = await getFichas();
    const newFichas = [...fichas.filter((f) => f.nome !== ficha.nome), ficha];
    await saveFichas(newFichas);
    navigation.navigate("Dia");
  };

  const confirmarExclusao = () => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir esta ficha?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: excluirFicha,
        },
      ]
    );
  };

  const excluirFicha = async () => {
    await deleteFicha(ficha.nome);
    navigation.navigate("Dia");
  };

  return (
    <View style={styles.container2}>
      <ScrollView Style={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>DIAS DE TREINO</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.headerText}>FICHA DE TREINO</Text>
          <View style={styles.formSection}>
            <Text>Nome:</Text>
            <TextInput
              style={styles.input}
              value={ficha.nome}
              onChangeText={(value) => setFicha({ ...ficha, nome: value })}
            />
            <Text>Idade:</Text>
            <TextInput
              style={styles.input}
              value={ficha.idade}
              onChangeText={(value) => setFicha({ ...ficha, idade: value })}
            />
            <Text>Restrições:</Text>
            <TextInput
              style={styles.input}
              value={ficha.restricoes}
              onChangeText={(value) =>
                setFicha({ ...ficha, restricoes: value })
              }
            />
          </View>
        </View>
        <View style={styles.formSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Aquecimento", {
                data: ficha.aquecimento,
                onSave: (data) => setFicha({ ...ficha, aquecimento: data }),
              })
            }
          >
            <Text style={styles.buttonText}>AQUECIMENTO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Aerobio", {
                data: ficha.aerobio,
                onSave: (data) => setFicha({ ...ficha, aerobio: data }),
              })
            }
          >
            <Text style={styles.buttonText}>AERÓBIO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Circuito", {
                data: ficha.circuito,
                onSave: (data) => setFicha({ ...ficha, circuito: data }),
              })
            }
          >
            <Text style={styles.buttonText}>CIRCUITO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Estacao", {
                data: ficha.estacao,
                onSave: (data) => setFicha({ ...ficha, estacao: data }),
              })
            }
          >
            <Text style={styles.buttonText}>ESTAÇÃO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("PesosLivres", {
                data: ficha.pesosLivres,
                onSave: (data) => setFicha({ ...ficha, pesosLivres: data }),
              })
            }
          >
            <Text style={styles.buttonText}>PESOS LIVRES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Solo", {
                data: ficha.solo,
                onSave: (data) => setFicha({ ...ficha, solo: data }),
              })
            }
          >
            <Text style={styles.buttonText}>SOLO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.formSection}>
            <Text style={styles.headerText}>OBSEVAÇÕES:</Text>
            <TextInput
              style={styles.input}
              multiline
              value={ficha.observacoes}
              onChangeText={(value) =>
                setFicha({ ...ficha, observacoes: value })
              }
            />
          </View>
        </View>
        <Button title="Excluir" onPress={confirmarExclusao} color="red" />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>DIAS DE TREINO:</Text>
              {Object.keys(ficha.diasDeTreino).map((day) => (
                <View key={day} style={styles.dayRow}>
                  <Text>{day}</Text>
                  <RNPickerSelect
                    onValueChange={(value) =>
                      setFicha({
                        ...ficha,
                        diasDeTreino: { ...ficha.diasDeTreino, [day]: value },
                      })
                    }
                    items={horarios}
                    value={ficha.diasDeTreino[day]}
                    placeholder={{ label: "Selecione o horário", value: null }}
                    style={pickerSelectStyles}
                  />
                </View>
              ))}
              <Text style={styles.modalTitle}>DIA DE AERÓBIO:</Text>
              <RNPickerSelect
                onValueChange={(value) =>
                  setFicha({ ...ficha, diaDeAerobio: value })
                }
                items={diasDaSemana}
                value={ficha.diaDeAerobio}
                placeholder={{ label: "Selecione o dia", value: null }}
                style={pickerSelectStyles}
              />

              <TouchableOpacity
                style={styles.okButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.okButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <TouchableOpacity style={styles.newFichaButton} onPress={salvarFicha}>
        <Icon name="save" size={27} color="#fff" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  container2: {
    flex: 1,
  },
  fixedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formSection: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 300,
    backgroundColor: "#f8f8f8",
    padding: 30,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  icon: {
    alignContent: "center",
    justifyContent: "center",
  },
  newFichaButton: {
    position: "absolute",
    backgroundColor: "#2EB4EE",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    bottom: 20,
    right: 20,
    width: 65,
    height: 65,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    margin: 5,
    width: "99%",
    height: 65,
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
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 100,
  },
});

export default FichaScreen;
