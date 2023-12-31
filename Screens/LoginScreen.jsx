import { useState } from "react";
import {
  Button,
  TextInput,
  Text,
  View,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};
const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isHidden, setIsHidden] = useState(true);
  const [focusedField, setFocusedField] = useState("");

  // const handleOutsideClick = () => {
  //    Keyboard.dismiss
  // }

  const onLogin = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Email adress"
            onChangeText={(text) =>
              setState((prev) => ({ ...prev, email: text }))
            }
            value={state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={isHidden ? true : false}
            onChangeText={(text) =>
              setState((prev) => ({ ...prev, password: text }))
            }
            value={state.password}
          ></TextInput>
          <Button
            title={"Sign In"}
            style={styles.title}
            onPress={() => navigation.navigate("Home")}
          ></Button>
          <Text
            style={styles.title}
            onPress={() => navigation.navigate("Registration")}
          >
            Зареєструватися
          </Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 12,
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
export default LoginScreen;
