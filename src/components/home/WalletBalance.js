import React from "react";
import { ImageBackground, Text, View } from "react-native";
import AppText from "../AppText";

export default function WalletBalance() {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/bg/wallet-balance.png")}
        style={{
          padding: 10,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
        imageStyle={{
          borderRadius: 12,
        }}
      >
        <View>
          <AppText white>Wallet balance</AppText>
          <AppText white bold medium>
            ₦7,500.23
          </AppText>
          <AppText white>{"View wallet >"} </AppText>
        </View>
      </ImageBackground>
    </View>
  );
}
