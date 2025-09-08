// components/AppBannerAd.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";

const bannerAdUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8058088126089237/9452280072"; // ganti dengan ID aslimu

export default function AppBannerAd() {
  return (
    <View style={styles.container}>
      <BannerAd unitId={bannerAdUnitId} size={BannerAdSize.FULL_BANNER} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 6,
  },
});
