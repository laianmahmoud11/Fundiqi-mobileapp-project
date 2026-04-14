import { colors } from "@/constants/theme";
import { StyleSheet, Text } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const BrandLogo = () => {
  return (
    <Text style={styles.logo}>
      Fundi<Text style={{ color: colors.tartary }}>к</Text>i
    </Text>
  );
};
export default BrandLogo;

const styles = StyleSheet.create({
  logo: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: wp("5%"),
  },
});
