import { colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const EmailAuthIntro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your email address</Text>
      <Text style={styles.subtitle}>
        We'll use this to sign you in or to create an account if you don't have
        one yet.
      </Text>
    </View>
  );
};

export default EmailAuthIntro;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp("5%"),
  },
  title: {
    fontSize: wp("7%"),
    fontWeight: "bold",
    color: colors.black,
    marginBottom: hp("2%"),
  },
  subtitle: {
    fontSize: wp("4%"),
    color: colors.black,
  },
});
