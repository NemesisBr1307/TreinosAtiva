import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
const SoloScreen = ({ route, navigation }) => {
  const { data, onSave } = route.params;
  const [solo, setSolo] = useState(data);

  useEffect(() => {
    onSave(solo);
  }, [solo]);

  return (
    <ScrollView Style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>ELEVAÇÃO DE PERNA</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={solo.elevacaoSoCarga}
          onChangeText={(value) => setSolo({ ...solo, elevacaoSoCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={solo.elevacaoSoSeries}
          onChangeText={(value) =>
            setSolo({ ...solo, elevacaoSoSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={solo.elevacaoSoRepeticoes}
          onChangeText={(value) =>
            setSolo({ ...solo, elevacaoSoRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>GLÚTEOS</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={solo.gluteoSoCarga}
          onChangeText={(value) => setSolo({ ...solo, gluteoSoCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={solo.gluteoSoSeries}
          onChangeText={(value) => setSolo({ ...solo, gluteoSoSeries: value })}
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={solo.gluteoSoRepeticoes}
          onChangeText={(value) =>
            setSolo({ ...solo, gluteoSoRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>ABDOMINAL</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={solo.abdominalSoCarga}
          onChangeText={(value) =>
            setSolo({ ...solo, abdominalSoCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={solo.gluteoSoSeries}
          onChangeText={(value) =>
            setSolo({ ...solo, abdominalSoSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={solo.abdominalSoRepeticoes}
          onChangeText={(value) =>
            setSolo({ ...solo, abdominalSoRepeticoes: value })
          }
        />
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 7,
    marginVertical: 5,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default SoloScreen;
