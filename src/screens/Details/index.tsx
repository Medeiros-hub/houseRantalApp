import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import SwiperComponent from "../../components/Swiper";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import Colors from "../../constants/Colors";

const Detail = () => {
  const [starCount, setStarCount] = useState<number>(0);

  const onStarRatingPress = (rating: number) => {
    setStarCount(rating);
  };

  const slider = [
    require("../../assets/house4.jpg"),
    require("../../assets/house5.jpg"),
    require("../../assets/house6.jpg"),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>
      <View style={styles.headerContent}>
        <View style={{ width: "65%" }}>
          <Text style={styles.title}>Casa de Praia</Text>
        </View>
        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <StarRating
              disabled={false}
              halfStarEnabled
              iconSet={"Ionicons"}
              fullStar={"md-star"}
              halfStar={"md-star-half"}
              emptyStar={"md-star-outline"}
              maxStars={5}
              starSize={24}
              fullStarColor={Colors.yellow}
              halfStarColor={Colors.yellow}
              emptyStarColor={Colors.yellow}
              rating={starCount}
              selectedStar={(rating) => onStarRatingPress(rating)}
            />
          </View>
        </View>
      </View>

      <Text style={styles.price}>R$ 1.200,20</Text>
      <Text style={styles.description}>
        Casa nova uma quadra do mar, lugar seguro e monitorado 24horas
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 40 }}
      >
        {slider.map((image, index) => {
          return (
            <View key={index} style={styles.slide}>
              <Image
                source={image}
                style={{ width: 90, height: 90, borderRadius: 8 }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Detail;
