import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const FichaViewScreen = ({ route, navigation }) => {
  const { ficha } = route.params;
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

  return (
    <ScrollView Style={styles.scrollContainer}>
      <Text>Ficha de Treino</Text>
      <View style={styles.formSection}>
        <Text>Nome:</Text>
        <TextInput style={styles.input} value={ficha.nome} editable={false} />
        <Text>Idade:</Text>
        <TextInput style={styles.input} value={ficha.idade} editable={false} />
        <Text>Restrições:</Text>
        <TextInput
          style={styles.input}
          value={ficha.restricoes}
          editable={false}
        />
      </View>
      <View style={styles.formSection}>
        <Button
          title="AQUECIMENTO"
          onPress={() =>
            navigation.navigate("Aquecimento", { data: ficha.aquecimento })
          }
        />
        <Button
          title="AERÓBIO"
          onPress={() =>
            navigation.navigate("Aerobio", { data: ficha.aerobio })
          }
        />
        <Button
          title="CIRCUITO"
          onPress={() =>
            navigation.navigate("Circuito", { data: ficha.circuito })
          }
        />
        <Button
          title="ESTAÇÃO"
          onPress={() =>
            navigation.navigate("Estacao", { data: ficha.estacao })
          }
        />
        <Button
          title="PESOS LIVRES"
          onPress={() =>
            navigation.navigate("PesosLivres", { data: ficha.pesosLivres })
          }
        />
        <Button
          title="SOLO"
          onPress={() => navigation.navigate("Solo", { data: ficha.solo })}
        />
      </View>
      <Button title="Dias de Treino" onPress={() => setModalVisible(true)} />
      <View style={styles.formSection}>
        <Text>Observações:</Text>
        <TextInput
          style={styles.input}
          multiline
          value={ficha.observacoes}
          editable={false}
        />
      </View>
      <Button
        title="Editar"
        onPress={() => navigation.navigate("Ficha", { ficha })}
      />

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
                  items={horarios}
                  value={ficha.diasDeTreino[day]}
                  style={pickerSelectStyles}
                  disabled={true}
                />
              </View>
            ))}
            <Text style={styles.modalTitle}>DIA DE AERÓBIO:</Text>
            <RNPickerSelect
              items={diasDaSemana}
              value={ficha.diaDeAerobio}
              style={pickerSelectStyles}
              disabled={true}
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
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#f8f8f8",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
    padding: 9,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 100,
  },
});
export default FichaViewScreen;
