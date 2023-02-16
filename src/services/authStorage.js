import AsyncStorage from "@react-native-async-storage/async-storage";

const getToken = async () => {
  try {
    const authDataSerialized = await AsyncStorage.getItem("@AuthData");
    const authData = await JSON.parse(authDataSerialized);
    return authData.token;
  } catch (error) {
    console.log("Error Getting the user:", error);
  }
};

export default { getToken };
