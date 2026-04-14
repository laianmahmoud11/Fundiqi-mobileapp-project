import { colors } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface Props {
  children: React.ReactNode;
}

const SmallNaviBar = ({ children }: Props) => {
  return <View style={styles.header}>{children}</View>;
};

export default SmallNaviBar;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    padding: wp("6%"),
    backgroundColor: colors.secondary,
    elevation: 4,
    shadowColor: "#282727",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: hp("10%"),
    justifyContent: "space-between",
  },
});
