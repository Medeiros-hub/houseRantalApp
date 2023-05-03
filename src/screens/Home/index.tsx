import React from "react";
import { View, Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import New from "../../components/New";
import House from "../../components/House";
import Recommended from "../../components/Recommended";

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      {/* Novidades */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <New
          cover={require("../../assets/house1.jpg")}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        />

        <New
          cover={require("../../assets/house2.jpg")}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        />

        <New
          cover={require("../../assets/house3.jpg")}
          name="Rancho SP"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        />
      </ScrollView>

      <View
        style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
      >
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>

      {/* Próximo de você */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <House
          cover={require("../../assets/house4.jpg")}
          description={"Casa incrivelmente boa para morar no mundo"}
          price={"954,60"}
        />

        <House
          cover={require("../../assets/house5.jpg")}
          description={"Casa incrivelmente boa para morar no mundo"}
          price={"954,60"}
        />

        <House
          cover={require("../../assets/house6.jpg")}
          description={"Casa incrivelmente boa para morar no mundo"}
          price={"954,60"}
        />
      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>Dica do dia</Text>

      {/* Recommended */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <Recommended
          cover={require("../../assets/house1.jpg")}
          house={"Casa Floripa"}
          offer={"25%"}
        />

        <Recommended
          cover={require("../../assets/house4.jpg")}
          house={"Casa São Paulo"}
          offer={"15%"}
        />

        <Recommended
          cover={require("../../assets/house6.jpg")}
          house={"Rancho Praia"}
          offer={"10%"}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
