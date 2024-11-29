import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const AquecimentoScreen = ({ route, navigation }) => {
  const { data, onSave } = route.params;
  const [aquecimento, setAquecimento] = useState(data);

  useEffect(() => {
    onSave(aquecimento);
  }, [aquecimento]);

  return (
    <ScrollView Style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>ESTEIRA</Text>
        <Text>Velocidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Velocidade"
          value={aquecimento.esteiraVelocidade}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, esteiraVelocidade: value })
          }
        />
        <Text>Inclinação</Text>
        <TextInput
          style={styles.input}
          placeholder="Inclinação"
          value={aquecimento.esteiraInclinacao}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, esteiraInclinacao: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aquecimento.esteiraTempo}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, esteiraTempo: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>BIKE RIGHETTO</Text>
        <Text>Furo</Text>
        <TextInput
          style={styles.input}
          placeholder="Furo"
          value={aquecimento.bikeRighettoFuro}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, bikeRighettoFuro: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aquecimento.bikeRighettoCarga}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, bikeRighettoCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aquecimento.bikeRighettoTempo}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, bikeRighettoTempo: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>BIKE REBOOK</Text>
        <Text>Furo</Text>
        <TextInput
          style={styles.input}
          placeholder="Furo"
          value={aquecimento.bikeRebookFuro}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, bikeRebookFuro: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aquecimento.bikeRebookCarga}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, bikeRebookCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aquecimento.bikeRebookTempo}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, bikeRebookTempo: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>ELIPTÍCO RIGHETTO</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aquecimento.elipticoRighettoCarga}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, elipticoRighettoCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aquecimento.elipticoRighettoTempo}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, elipticoRighettoTempo: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>ELIPTÍCO REBOOK</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aquecimento.elipticoRebookCarga}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, elipticoRebookCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aquecimento.elipticoRebookTempo}
          onChangeText={(value) =>
            setAquecimento({ ...aquecimento, elipticoRebookTempo: value })
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

export default AquecimentoScreen;
