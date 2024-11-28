import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const CircuitoScreen = ({ route, navigation }) => {
  const { data, onSave } = route.params;
  const [circuito, setCircuito] = useState(data);

  useEffect(() => {
    onSave(circuito);
  }, [circuito]);

  return (
    <ScrollView Style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>PEITORAL</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.peitoralF1}
          onChangeText={(value) =>
            setCircuito({ ...circuito, peitoralF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.peitoralF2}
          onChangeText={(value) =>
            setCircuito({ ...circuito, peitoralF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.peitoralF3}
          onChangeText={(value) =>
            setCircuito({ ...circuito, peitoralF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.peitoralCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, peitoralCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.peitoralSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, peitoralSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.peitoralRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, peitoralRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>REMADA</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.remadaF1}
          onChangeText={(value) =>
            setCircuito({ ...circuito, remadalF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.remadaF2}
          onChangeText={(value) =>
            setCircuito({ ...circuito, peitoralF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.remadaF3}
          onChangeText={(value) =>
            setCircuito({ ...circuito, remadaF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.remadaCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, remadaCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.remadaSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, remadaSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.remadaRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, remadaRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>EXTENSOR LOMBAR</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.extensorF1}
          onChangeText={(value) =>
            setCircuito({ ...circuito, extensorF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.extensorF2}
          onChangeText={(value) =>
            setCircuito({ ...circuito, extensorF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.extensorF3}
          onChangeText={(value) =>
            setCircuito({ ...circuito, extensorF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.extensorCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, extensorCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.extensorSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, extensorSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.extensorRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, extensorRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>LEG PRESS</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.legF1}
          onChangeText={(value) => setCircuito({ ...circuito, legF1: value })}
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.legF2}
          onChangeText={(value) => setCircuito({ ...circuito, legF2: value })}
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.legF3}
          onChangeText={(value) => setCircuito({ ...circuito, legF3: value })}
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.legCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, legCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.legSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, legSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.legRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, legRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>PANTURRILHA</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.panturrilhaF1}
          onChangeText={(value) =>
            setCircuito({ ...circuito, panturrilhaF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.panturrilhaF2}
          onChangeText={(value) =>
            setCircuito({ ...circuito, panturrilhaF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.panturrilhaF3}
          onChangeText={(value) =>
            setCircuito({ ...circuito, panturrilhaF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.panturrilhaCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, panturrilhaCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.panturrilhaSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, panturrilhaSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.panturrilhaRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, panturrilhaRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>FLEXOR ABDOMINAL</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.flexorF1}
          onChangeText={(value) =>
            setCircuito({ ...circuito, flexorF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.flexorF2}
          onChangeText={(value) =>
            setCircuito({ ...circuito, flexorF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.flexorF3}
          onChangeText={(value) =>
            setCircuito({ ...circuito, flexorF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.flexorCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, flexorCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.flexorSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, flexorSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.flexorRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, flexorRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>INTERNO COXA</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.coxaF1}
          onChangeText={(value) => setCircuito({ ...circuito, coxaF1: value })}
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.coxaF2}
          onChangeText={(value) => setCircuito({ ...circuito, coxaF2: value })}
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.coxaF3}
          onChangeText={(value) => setCircuito({ ...circuito, coxaF3: value })}
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.coxaCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, coxaCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.coxaSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, coxaSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.coxaRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, coxaRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>DESENVOLVIMENTO</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.desenvolvimentoF1}
          onChangeText={(value) =>
            setCircuito({ ...circuito, desenvolvimentoF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.desenvolvimentoF2}
          onChangeText={(value) =>
            setCircuito({ ...circuito, desenvolvimentoF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.desenvolvimentoF3}
          onChangeText={(value) =>
            setCircuito({ ...circuito, desenvolvimentoF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.desenvolvimentoCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, desenvolvimentoCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.desenvolvimentoSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, desenvolvimentoSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.desenvolvimentoRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, desenvolvimentoRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>GLÚTEOS UNILATERAL</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={circuito.gluteosF1}
          onChangeText={(value) =>
            setCircuito({ ...circuito, gluteosF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={circuito.gluteosF2}
          onChangeText={(value) =>
            setCircuito({ ...circuito, gluteosF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={circuito.gluteosF3}
          onChangeText={(value) =>
            setCircuito({ ...circuito, gluteosF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={circuito.gluteosCarga}
          onChangeText={(value) =>
            setCircuito({ ...circuito, gluteosCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={circuito.gluteosSeries}
          onChangeText={(value) =>
            setCircuito({ ...circuito, gluteosSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={circuito.gluteosRepeticoes}
          onChangeText={(value) =>
            setCircuito({ ...circuito, gluteosRepeticoes: value })
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

export default CircuitoScreen;
