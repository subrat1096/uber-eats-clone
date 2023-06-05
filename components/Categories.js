import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/online-shopping.png"),
    text: "Pick-Up",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/hamburger.png"),
    text: "Burger",
  },
  {
    image: require("../assets/images/pizza.png"),
    text: "Pizza",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/dosa.png"),
    text: "Dosa",
  },
  {
    image: require("../assets/images/fried-chicken.png"),
    text: "Chicken",
  },
  {
    image: require("../assets/images/fish.png"),
    text: "Fish",
  },
  {
    image: require("../assets/images/meal.png"),
    text: "Meals",
  },
  {
    image: require("../assets/images/paneer.png"),
    text: "Paneer",
  },
  {
    image: require("../assets/images/ice-cream.png"),
    text: "Deserts",
  },
];

export default function Categories() {
  return (
    <View style={{marginTop:5,backgroundColor:"#fff",paddingVertical:10, paddingLeft:20}} >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop starts here */}
        {items.map((item, index) => {
          return (
            <View key={index} style={{ alignItems: "center", marginRight: 25 }}>
              <Image
                source={item.image}
                style={{ width: 50, height: 40, resizeMode: "contain" }}
              />
              <Text style={{ fontSize: 15, color: "#000", fontWeight: "bold" }}>
                {item.text}
              </Text>
            </View>
          );
        })}
        {/* loop endss here */}
      </ScrollView>
    </View>
  );
}
