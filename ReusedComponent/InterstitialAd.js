// InterstitialAdManager.js
import { InterstitialAd, AdEventType, TestIds } from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-8058088126089237/2323479533"; // ganti dengan ID interstitialmu

class InterstitialAdManager {
  constructor() {
    this.interstitial = InterstitialAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
    });
    this.isLoaded = false;
    this.nextNavigation = null;

    this.interstitial.addAdEventListener(AdEventType.LOADED, () => {
      this.isLoaded = true;
    });

    this.interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      this.isLoaded = false;
      this.interstitial.load();
      if (this.nextNavigation && this.navigation) {
        this.navigation.navigate("quiz", { type: this.nextNavigation });
        this.nextNavigation = null;
      }
    });

    this.interstitial.load();
  }

  setNavigation(navigation) {
    this.navigation = navigation;
  }

  showAd(type, navigation) {
    this.setNavigation(navigation);

    if (this.isLoaded) {
      this.nextNavigation = type;
      this.interstitial.show();
    } else {
      navigation.navigate("quiz", { type });
    }
  }
}

const interstitialAdManager = new InterstitialAdManager();
export default interstitialAdManager;
