import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 230,
    marginRight: 20,
    marginLeft: 3,
    marginTop: 20,
    marginBottom: 40,
    padding: 12,
    opacity: 0.8,
    backgroundColor: Colors.black,
  },
  house: {
    fontFamily: "Montserrat_700Bold",
    color: Colors.white,
    fontSize: 15,
  },
  description: {
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
    color: Colors.white,
  },
  shadow: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textShadowColor: Colors.black,
  },
});
