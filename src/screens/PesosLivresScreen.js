import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const PesosLivresScreen = ({ route, navigation }) => {
  const { data, onSave } = route.params;
  const [pesos, setPesos] = useState(data);

  useEffect(() => {
    onSave(pesos);
  }, [pesos]);

  return (
    <ScrollView Style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>BÍCEPS COM HALTER</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={pesos.bicepsHaCarga}
          onChangeText={(value) => setPesos({ ...pesos, bicepsHaCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={pesos.bicepsHaSeries}
          onChangeText={(value) =>
            setPesos({ ...pesos, bicepsHaSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={pesos.bicepsHaRepeticoes}
          onChangeText={(value) =>
            setPesos({ ...pesos, bicepsHaRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>BÍCEPS COM BARRA</Text>
        <Text>Barra</Text>
        <TextInput
          style={styles.input}
          placeholder="Barra"
          value={pesos.bicepsBaBarra}
          onChangeText={(value) => setPesos({ ...pesos, bicepsBaBarra: value })}
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={pesos.bicepsBaCarga}
          onChangeText={(value) => setPesos({ ...pesos, bicepsBaCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={pesos.bicepsBaSeries}
          onChangeText={(value) =>
            setPesos({ ...pesos, bicepsBaSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={pesos.extensoraRepeticoes}
          onChangeText={(value) =>
            setPesos({ ...pesos, bicepsBaRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>BÍCEPS COM BARRA</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={pesos.bicepsBaCarga}
          onChangeText={(value) => setPesos({ ...pesos, bicepsBaCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={pesos.extensoraSeries}
          onChangeText={(value) =>
            setPesos({ ...pesos, extensoraSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={pesos.extensoraRepeticoes}
          onChangeText={(value) =>
            setPesos({ ...pesos, extensoraRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>OMBRO ELEVAÇÃO LATERAL/FRONTAL</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={pesos.elevacaoCarga}
          onChangeText={(value) => setPesos({ ...pesos, elevacaoCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={pesos.elevacaoSeries}
          onChangeText={(value) =>
            setPesos({ ...pesos, elevacaoSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={pesos.elevacaoRepeticoes}
          onChangeText={(value) =>
            setPesos({ ...pesos, elevacaoRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>ADUÇÃO</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={pesos.aducaoCarga}
          onChangeText={(value) => setPesos({ ...pesos, aducaoCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={pesos.aducaoSeries}
          onChangeText={(value) => setPesos({ ...pesos, aducaoSeries: value })}
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={pesos.aducaoRepeticoes}
          onChangeText={(value) =>
            setPesos({ ...pesos, aducaoRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>ABDUÇÃO</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={pesos.abducaoCarga}
          onChangeText={(value) => setPesos({ ...pesos, aducaoCarga: value })}
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={pesos.abducaoSeries}
          onChangeText={(value) => setPesos({ ...pesos, abducaoSeries: value })}
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={pesos.abducaoRepeticoes}
          onChangeText={(value) =>
            setPesos({ ...pesos, abducaoRepeticoes: value })
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

export default PesosLivresScreen;
