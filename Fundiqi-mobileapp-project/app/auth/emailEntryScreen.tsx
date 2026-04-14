import EmailAddress from "@/components/auth/emailAddress";
import EmailAuthIntro from "@/components/auth/emailAuthText";
import { colors } from "@/constants/theme";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const EmailEntryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <EmailAuthIntro />
          <EmailAddress />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: wp("1.5%"),
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    padding: wp("6%"),
  },
});

export default EmailEntryScreen;
