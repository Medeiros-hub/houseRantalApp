import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamsList } from "../../router";
import { styles } from "./style";

interface INewsProps {
  cover: any;
  name: string;
  description: string;
}

type authScreenProps = StackNavigationProp<AppStackParamsList>;

const News: React.FC<INewsProps> = ({ cover, name, description }) => {
  const navigation = useNavigation<authScreenProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details")}
      style={styles.container}
    >
      <Image source={cover} style={styles.cover} />

      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.dot}></View>
        <Text style={styles.badge}>Novo</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <View style={{ width: "80%" }}>
          <Text style={styles.price}>R$ 1.204,90</Text>
        </View>
        <View style={{ width: "20%" }}>
          <Ionicons name="ios-add-circle" size={24} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default News;
