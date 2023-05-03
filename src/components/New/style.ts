import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 12,
    color: Colors.gray.medium,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.red,
    marginHorizontal: 4 
  },
  badge: {
    color: Colors.red,
    fontSize: 9,
    fontFamily: "Montserrat_700Bold",
  },
  description: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 9,
    color: Colors.gray.medium
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: "center",
    width: '100%',
  },
  price: {
    fontSize: 15,
    fontFamily: "Montserrat_700Bold",
  }
});
