import { colors } from "@/constants/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

type Props = {
  title: string;
  color?: "blue" | "white";
  icon?: any;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

const PrimaryButton = ({ title, color = "blue", icon, onPress }: Props) => {
  const buttonStyle = color === "blue" ? styles.blue : styles.white;
  const textStyle = color === "blue" ? styles.blueText : styles.whiteText;

  return (
    <Pressable style={buttonStyle} onPress={onPress} disabled={!onPress}>
      <View style={styles.content}>
        {icon}
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  blue: {
    backgroundColor: colors.tertiary,
    paddingVertical: wp("4.5%"),
    paddingHorizontal: wp("7%"),
    borderRadius: wp("2.5%"),
    alignItems: "center",
  },
  blueText: {
    color: "white",
    fontSize: wp("4.5%"),
    fontWeight: "semibold",
  },
  white: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: wp("4.5%"),
    paddingHorizontal: wp("7%"),
    borderRadius: wp("2.5%"),
    alignItems: "center",
  },
  whiteText: {
    color: colors.black,
    fontSize: wp("4.5%"),
    fontWeight: "semibold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2.5%"),
  },
});
