import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const AerobioScreen = ({ route, navigation }) => {
  const { data, onSave } = route.params;
  const [aerobio, setAerobio] = useState(data);

  useEffect(() => {
    onSave(aerobio);
  }, [aerobio]);

  return (
    <ScrollView Style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>ESTEIRA</Text>
        <Text style={styles.subHeaderText}>Caminhada</Text>
        <Text>Velocidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Velocidade"
          value={aerobio.esteiraAeVelocidade}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, esteiraAeVelocidade: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aerobio.esteiraAeTempo}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, esteiraAeTempo: value })
          }
        />
        <Text style={styles.subHeaderText}>Intervalado</Text>
        <Text>Tempo Total</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo Total"
          value={aerobio.esteiraAeTempoTotal}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, esteiraAeTempoTotal: value })
          }
        />
        <Text>Velocidade Caminhada</Text>
        <TextInput
          style={styles.input}
          placeholder="Velocidade Caminhada"
          value={aerobio.esteiraAeVelocidadeCaminhada}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, esteiraAeVelocidadeCaminhada: value })
          }
        />
        <Text>Tempo Caminhada</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo Caminhada"
          value={aerobio.esteiraAeTempoCaminhada}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, esteiraAeTempoCaminhada: value })
          }
        />
        <Text>Velocidade Corrida</Text>
        <TextInput
          style={styles.input}
          placeholder="Velocidade Corrida"
          value={aerobio.esteiraAeVelocidadeCorrida}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, esteiraAeVelocidadeCorrida: value })
          }
        />
        <Text>Tempo Corrida</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo Corrida"
          value={aerobio.esteiraAeTempoCorrida}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, esteiraAeTempoCorrida: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>BIKE RIGHETTO</Text>
        <Text>Furo</Text>
        <TextInput
          style={styles.input}
          placeholder="Furo"
          value={aerobio.bikeAeRighettoFuro}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, bikeAeRighettoFuro: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aerobio.bikeAeRighettoCarga}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, bikeAeRighettoCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aerobio.bikeAeRighettoTempo}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, bikeAeRighettoTempo: value })
          }
        />
      </View>
      {/* Adicione os outros campos e categorias aqui */}
      <View style={styles.container}>
        <Text style={styles.headerText}>BIKE REBOOK</Text>
        <Text>Furo</Text>
        <TextInput
          style={styles.input}
          placeholder="Furo"
          value={aerobio.bikeAeRebookFuro}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, bikeAeRebookFuro: value })
          }
        />
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aerobio.bikeAeRebookCarga}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, bikeAeRebookCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aerobio.bikeAeRebookTempo}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, bikeAeRebookTempo: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>ELIPTÍCO RIGHETTO</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aerobio.elipticoAeRighettoCarga}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, elipticoAeRighettoCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aerobio.elipticoAeRighettoTempo}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, elipticoAeRighettoTempo: value })
          }
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>ELIPTÍCO REBOOK</Text>
        <Text>Carga</Text>
        <TextInput
          style={styles.input}
          placeholder="Carga"
          value={aerobio.elipticoAeRebookCarga}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, elipticoAeRebookCarga: value })
          }
        />
        <Text>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Tempo"
          value={aerobio.elipticoAeRebookTempo}
          onChangeText={(value) =>
            setAerobio({ ...aerobio, elipticoAeRebookTempo: value })
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
  subHeaderText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default AerobioScreen;
