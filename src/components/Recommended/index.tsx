import React from "react";
import { Text, ImageBackground } from "react-native";
import { styles } from "./styles";

interface RecommendedProps {
  cover: any;
  house: string;
  offer: string;
}

const Recommended: React.FC<RecommendedProps> = ({ cover, house, offer }) => {
  return (
    <ImageBackground source={cover} style={styles.container} blurRadius={4}>
      <Text style={[styles.house, styles.shadow]}>
        {house}
      </Text>
      <Text style={[styles.description, styles.shadow]}>
        {offer} OFF
      </Text>
    </ImageBackground>
  );
};

export default Recommended;
