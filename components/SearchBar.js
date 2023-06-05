import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}>
      <GooglePlacesAutocomplete
        placeholder="Location"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "500",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <Ionicons
              name="search-sharp"
              size={18}
              style={{ marginRight: 4 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
