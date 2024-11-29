import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DiaScreen from "./src/screens/DiaScreen";
import HorariosScreen from "./src/screens/HorariosScreen";
import AlunosScreen from "./src/screens/AlunosScreen";
import FichaScreen from "./src/screens/FichaScreen";
import AquecimentoScreen from "./src/screens/AquecimentoScreen";
import AerobioScreen from "./src/screens/AerobioScreen";
import CircuitoScreen from "./src/screens/CircuitoScreen";
import EstacaoScreen from "./src/screens/EstacaoScreen";
import PesosLivresScreen from "./src/screens/PesosLivresScreen";
import SoloScreen from "./src/screens/SoloScreen";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dia"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2EB4EE",
            height: 100,
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Dia" component={DiaScreen} />
        <Stack.Screen name="Horarios" component={HorariosScreen} />
        <Stack.Screen name="Alunos" component={AlunosScreen} />
        <Stack.Screen name="Ficha" component={FichaScreen} />
        <Stack.Screen name="Aquecimento" component={AquecimentoScreen} />
        <Stack.Screen name="Aerobio" component={AerobioScreen} />
        <Stack.Screen name="Circuito" component={CircuitoScreen} />
        <Stack.Screen name="Estacao" component={EstacaoScreen} />
        <Stack.Screen name="PesosLivres" component={PesosLivresScreen} />
        <Stack.Screen name="Solo" component={SoloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
