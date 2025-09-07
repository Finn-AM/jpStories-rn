import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CategoryButton({ icon, label, count , name , navigation }) {

  const handlePress = () => {
    // Alert.alert(message);
    navigation.navigate(name)
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.left}>
        <Ionicons name={icon} size={24} color="#4C6EF5" />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.countBox}>
        <Text style={styles.countText}>{count} Story</Text>
      </View>
    </TouchableOpacity>
  );
}








const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginBottom: 10,
    width:'90%',

  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  label: { fontSize: 16, marginLeft: 10, fontWeight: '500' },
  countBox: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  countText: { fontSize: 13, color: '#555' },
});
