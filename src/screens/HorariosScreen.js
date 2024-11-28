import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const HorariosScreen = ({ navigation, route }) => {
  const { selectedDay } = route.params;

  const handleTimeFilter = (time) => {
    navigation.navigate("Alunos", { selectedDay, selectedTime: time });
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterButtons}>
        {[
          "06:00",
          "06:30",
          "07:00",
          "07:30",
          "08:00",
          "08:30",
          "09:00",
          "09:30",
          "10:00",
          "15:00",
          "15:30",
          "16:00",
          "16:30",
          "17:00",
          "17:30",
          "18:00",
          "18:30",
          "19:00",
          "19:30",
          "20:00",
        ].map((time) => (
          <TouchableOpacity
            key={time}
            style={styles.button}
            onPress={() => handleTimeFilter(time)}
          >
            <Text style={styles.buttonText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
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
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginVertical: 10,
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
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    color: "#000000",
  },
});

export default HorariosScreen;
