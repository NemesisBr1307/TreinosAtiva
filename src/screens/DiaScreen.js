import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const DiaScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayFilter = (day) => {
    setSelectedDay(day);
    navigation.navigate("Horarios", { selectedDay: day });
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDayFilter("SEG")}
        >
          <Text style={styles.buttonText}>SEG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDayFilter("TER")}
        >
          <Text style={styles.buttonText}>TER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDayFilter("QUA")}
        >
          <Text style={styles.buttonText}>QUA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDayFilter("QUI")}
        >
          <Text style={styles.buttonText}>QUI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDayFilter("SEX")}
        >
          <Text style={styles.buttonText}>SEX</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Alunos", {
              selectedDay: null,
              selectedTime: null,
            })
          }
        >
          <Text style={styles.buttonText}>Ver Todos</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.newFichaButton}
        onPress={() => navigation.navigate("Ficha")}
      >
        <Icon name="close" size={27} color="#fff" style={styles.icon} />
      </TouchableOpacity>
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
  filterButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginVertical: 10,
    marginHorizontal: 10,
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
    width: 85,
    height: 85,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: "center",
  },
  absoluteButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    bottom: 20,
    left: 20,
    width: 85,
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
  icon: {
    alignContent: "center",
    justifyContent: "center",
    transform: [{ rotate: "45deg" }],
  },
});

export default DiaScreen;
