import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setactiveTab] = useState("Delivery");

  return (
    <View
      style={{
        marginTop: 35,
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      {/* Header Button */}
      <HeaderButton
        text="Delivery"
        btncolor="black"
        textcolor="white"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
      <HeaderButton
        text="Pick-Up"
        btncolor="white"
        textcolor="black"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: props.activeTab === props.text ? "black" : "white",
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
        onPress={() => {
          props.setactiveTab(props.text);
        }}
      >
        <Text
          style={{
            color: props.activeTab === props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
