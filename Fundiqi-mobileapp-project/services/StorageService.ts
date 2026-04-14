import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const StorageService = {
  async saveToken(token: string) {
    await SecureStore.setItemAsync("token", token);
  },

  async getToken() {
    return await SecureStore.getItemAsync("token");
  },

  async saveUser(user: any) {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  },
};

export default StorageService;
