import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./style";

interface HouseProps {
  cover: any;
  description: string;
  price: string;
}

const House: React.FC<HouseProps> = ({ cover, description, price }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={cover} style={styles.cover} />
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>R$ {price}</Text>
      </View>
    </View>
  );
};

export default House;
