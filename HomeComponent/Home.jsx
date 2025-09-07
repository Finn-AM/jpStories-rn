import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View ,ScrollView , TouchableOpacity, Button } from "react-native";
import { SafeAreaView, Platform } from 'react-native'; // Tambahkan import ini
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeChild from "../ReusedComponent/HomeChild";

import CategoryButton from "../ReusedComponent/CategoryButton";


function MainScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('home'); // default aktif

  const handleNavPress = (tabName) => {
    setActiveTab(tabName);

    // pindah screen sesuai tab
    if (tabName === 'home') {
      navigation.navigate('Home');  // pastikan screen "Home" ada di stack navigator kamu
    } else if (tabName === 'story') {
      navigation.navigate('StoryContent'); // pastikan screen "StoryContent" ada
    }
  };


  
  const getIconColor = (tabName) => (activeTab === tabName ? '#4F8EF7' : '#999');

  return (
    <SafeAreaView style={styles.container}>

    <ScrollView style={styles.allV}>
<Text style={styles.superTitle}>Japanese Story</Text>

    {/* <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate("StoryList", { type: "N2" })}
    >
      <View style={styles.iconWrapper}>
      </View>
      <Text style={styles.cardText}>Japanese  Text</Text>
    </TouchableOpacity> */}



      <View style={styles.container}>
        <CategoryButton icon="book-outline" label="N1" count="10" name="N1" navigation={navigation} />
        <CategoryButton icon="chatbubbles" label="N2" count="10" name="N2" navigation={navigation} />
        <CategoryButton icon="chatbubbles" label="N3" count="10" name="N3" navigation={navigation} />
        <CategoryButton icon="chatbubbles" label="N4" count="10" name="N4" navigation={navigation}/>
        <CategoryButton icon="chatbubbles" label="N5" count="10" name="N5" navigation={navigation}/>
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate("StoryList", { type: "N2" })}
    >
      <View style={styles.iconWrapper}>
        <Ionicons name="book-outline" size={26} color="#fff" />
      </View>
      <Text style={styles.cardText}>Story Games</Text>
      <Ionicons name="chevron-forward" size={22} color="#fff" />
    </TouchableOpacity>
      </View>

    </ScrollView>


{/* Custom navbar  */}

{/* <View style={[styles.navbar, { paddingBottom: insets.bottom + 10 }]}>


        <TouchableOpacity onPress={() => handleNavPress('home')}>
          <Ionicons name="home" size={24} color={getIconColor('home')} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleNavPress('story')}>
          <Ionicons name="menu" size={24} color={getIconColor('menu')} />
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleNavPress('star')}>
          <Ionicons name="star" size={24} color={getIconColor('star')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavPress('person')}>
          <Ionicons name="person" size={24} color={getIconColor('person')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavPress('settings')}>
          <Ionicons name="settings" size={24} color={getIconColor('settings')} />
        </TouchableOpacity>
      </View> */}

    </SafeAreaView>
  );
}

export default function Home({navigation}) {
  return (
    <SafeAreaProvider>
      <MainScreen navigation={navigation}/>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    flexDirection: "row",
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },allV:{
    backgroundColor: "#4A90E2",
  },superTitle:{
    fontSize:23,
    fontWeight: "bold",
    // color: "",
    textAlign: "center",
    marginTop:15,
    marginBottom:5
  },
  
  navbar: {
  position: 'absolute',
  bottom: 0,
  // left: 20,
  // right: 20,
  width:'100%',
  // backgroundColor: 'aqua',
  borderRadius: 30,
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 14,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 5,
},
card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    width:'95%',
    borderWidth:2,
    borderColor:'#4A90E2'
  },
    iconWrapper: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 32,
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },superTitle: {
  fontSize: 28,
  fontWeight: "700",
  color: "#1B263B", // deep navy (Japan vibe)
  textAlign: "center",
  marginVertical: 20,
  letterSpacing: 1,
  textShadowColor: "rgba(0,0,0,0.15)",
  textShadowOffset: { width: 1, height: 2 },
  textShadowRadius: 3,
},
});

