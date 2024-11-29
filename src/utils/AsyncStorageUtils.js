import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveFicha = async (key, ficha) => {
  try {
    const jsonValue = JSON.stringify(ficha);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

export const getFichas = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("fichas");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {}
};

export const saveFichas = async (fichas) => {
  try {
    const jsonValue = JSON.stringify(fichas);
    await AsyncStorage.setItem("fichas", jsonValue);
  } catch (e) {}
};

export const deleteFicha = async (nome) => {
  try {
    const fichas = await getFichas();
    const newFichas = fichas.filter((ficha) => ficha.nome !== nome);
    await saveFichas(newFichas);
  } catch (e) {
    console.error("Erro ao deletar ficha: ", e);
  }
};
