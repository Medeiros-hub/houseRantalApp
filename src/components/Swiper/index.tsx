import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./style";
import Colors from "../../constants/Colors";

const SwiperComponent = () => {
  const slider = [
    require("../../assets/house1.jpg"),
    require("../../assets/house2.jpg"),
    require("../../assets/house3.jpg"),
  ];

  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: Colors.black,
        borderColor: Colors.black,
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor={Colors.white}
      activeDotStyle={{
        borderColor: Colors.black,
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
    >
      {slider.map((image, index) => {
        return (
          <View key={index} style={styles.slide}>
            <Image
              source={image}
              style={{ width: "100%", height: 400 }}
            />
          </View>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
