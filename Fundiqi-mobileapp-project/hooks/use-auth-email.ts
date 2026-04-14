import { loginOrSignup } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

export const useAuthEmail = () => {
  return useMutation({
    mutationFn: async (payload: { email: string; password: string }) => {
      return await loginOrSignup(payload);
    },
    onSuccess: (user) => {
      console.log("success:", user.email);
      router.replace("/(tabs)");
    },
    onError: (error: any) => {
      console.error("error:", error.code, error.message);
    },
  });
};
