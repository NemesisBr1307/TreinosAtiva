import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const EstacaoScreen = ({ route, navigation }) => {
  const { data, onSave } = route.params;
  const [estacao, setEstacao] = useState(data);

  useEffect(() => {
    onSave(estacao);
  }, [estacao]);

  return (
    <ScrollView Style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>CADEIRA EXTENSORA</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={estacao.extensoraF1}
          onChangeText={(value) =>
            setEstacao({ ...estacao, extensoraF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={estacao.extensoraF2}
          onChangeText={(value) =>
            setEstacao({ ...estacao, extensoraF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={estacao.peitoralF3}
          onChangeText={(value) =>
            setEstacao({ ...estacao, extensoraF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={estacao.extensoraCarga}
          onChangeText={(value) =>
            setEstacao({ ...estacao, extensoraCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={estacao.extensoraSeries}
          onChangeText={(value) =>
            setEstacao({ ...estacao, extensoraSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={estacao.extensoraRepeticoes}
          onChangeText={(value) =>
            setEstacao({ ...estacao, extensoraRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>VOADOR</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={estacao.voadorF1}
          onChangeText={(value) => setEstacao({ ...estacao, voadorF1: value })}
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={estacao.voadorF2}
          onChangeText={(value) => setEstacao({ ...estacao, voadorF2: value })}
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={estacao.voadorF3}
          onChangeText={(value) => setEstacao({ ...estacao, voadorF3: value })}
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={estacao.voadorCarga}
          onChangeText={(value) =>
            setEstacao({ ...estacao, voadorCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={estacao.voadorSeries}
          onChangeText={(value) =>
            setEstacao({ ...estacao, voadorSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={estacao.voadorRepeticoes}
          onChangeText={(value) =>
            setEstacao({ ...estacao, voadorRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>PUXADA</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={estacao.puxadaF1}
          onChangeText={(value) => setEstacao({ ...estacao, puxadaF1: value })}
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={estacao.puxadaF2}
          onChangeText={(value) => setEstacao({ ...estacao, puxadaF2: value })}
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={estacao.puxadaF3}
          onChangeText={(value) => setEstacao({ ...estacao, puxadaF3: value })}
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={estacao.puxadaCarga}
          onChangeText={(value) =>
            setEstacao({ ...estacao, puxadaCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={estacao.puxadaSeries}
          onChangeText={(value) =>
            setEstacao({ ...estacao, puxadaSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={estacao.puxadaRepeticoes}
          onChangeText={(value) =>
            setEstacao({ ...estacao, puxadaRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>PEITORAL</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={estacao.peitoralEsF1}
          onChangeText={(value) =>
            setEstacao({ ...estacao, peitoralEsF1: value })
          }
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={estacao.peitoralEsF2}
          onChangeText={(value) =>
            setEstacao({ ...estacao, peitoralEsF2: value })
          }
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={estacao.peitoralEsF3}
          onChangeText={(value) =>
            setEstacao({ ...estacao, peitoralEsF3: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={estacao.peitoralEsCarga}
          onChangeText={(value) =>
            setEstacao({ ...estacao, peitoralEsCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={estacao.peitoralEsSeries}
          onChangeText={(value) =>
            setEstacao({ ...estacao, peitoralEsSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={estacao.peitoralEsRepeticoes}
          onChangeText={(value) =>
            setEstacao({ ...estacao, peitoralEsRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>CADEIRA FLEXORA</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={estacao.flexoraF1}
          onChangeText={(value) => setEstacao({ ...estacao, flexoraF1: value })}
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={estacao.flexoraF2}
          onChangeText={(value) => setEstacao({ ...estacao, flexoraF2: value })}
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={estacao.flexoraF3}
          onChangeText={(value) => setEstacao({ ...estacao, flexoraF3: value })}
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={estacao.flexoraCarga}
          onChangeText={(value) =>
            setEstacao({ ...estacao, flexoraCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={estacao.flexoraSeries}
          onChangeText={(value) =>
            setEstacao({ ...estacao, flexoraSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={estacao.flexoraRepeticoes}
          onChangeText={(value) =>
            setEstacao({ ...estacao, flexoraRepeticoes: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>TRÍCEPS</Text>
        <Text>F1</Text>
        <TextInput
          style={styles.input}
          placeholder="F1"
          value={estacao.tricepsF1}
          onChangeText={(value) => setEstacao({ ...estacao, tricepsF1: value })}
        />
        <Text>F2</Text>
        <TextInput
          style={styles.input}
          placeholder="F2"
          value={estacao.tricepsF2}
          onChangeText={(value) => setEstacao({ ...estacao, tricepsF2: value })}
        />
        <Text>F3</Text>
        <TextInput
          style={styles.input}
          placeholder="F3"
          value={estacao.tricepsF3}
          onChangeText={(value) => setEstacao({ ...estacao, tricepsF3: value })}
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={estacao.tricepsCarga}
          onChangeText={(value) =>
            setEstacao({ ...estacao, tricepsCarga: value })
          }
        />
        <Text>Séries</Text>
        <TextInput
          style={styles.input}
          placeholder="Séries"
          value={estacao.tricepsSeries}
          onChangeText={(value) =>
            setEstacao({ ...estacao, tricepsSeries: value })
          }
        />
        <Text>Repetições</Text>
        <TextInput
          style={styles.input}
          placeholder="Repetições"
          value={estacao.tricepsRepeticoes}
          onChangeText={(value) =>
            setEstacao({ ...estacao, tricepsRepeticoes: value })
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

export default EstacaoScreen;
