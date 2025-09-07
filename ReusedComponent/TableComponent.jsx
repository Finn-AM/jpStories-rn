// AccordionTableComponent.js
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function AccordionTable({ data }) {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    const finalValue = expanded ? 0 : 1;

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  // Tinggi tabel animasi (maks 400 bisa disesuaikan)
const maxHeight = animation.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 600], // kamu bisa ubah max tingginya
});

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.button}>
        <Text style={styles.buttonText}>
          {expanded ? 'Hide Translation ▲' : 'See Translation ▼'}
        </Text>
      </TouchableOpacity>

<Animated.View style={{ height: maxHeight, overflow: 'hidden' }}>
  <ScrollView nestedScrollEnabled={true}>
    <View style={styles.table}>
      {data.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={[
            styles.row,
            rowIndex === 0
              ? styles.header
              : rowIndex % 2 === 0
              ? styles.evenRow
              : styles.oddRow,
          ]}
        >
          {row.map((cell, cellIndex) => (
            <View
              key={cellIndex}
              style={[
                styles.cell,
                cellIndex === 0 && styles.smallColumn,
              ]}
            >
              <Text
                style={[
                  styles.text,
                  rowIndex === 0 && styles.headerText,
                  rowIndex !== 0 && cellIndex === 0 && styles.smallText, // kolom "No"
                  rowIndex !== 0 && cellIndex === 2 && styles.smallText, // kolom "Nilai"
                ]}
              >
                {cell}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  </ScrollView>
</Animated.View>


    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  animatedContainer: {
    overflow: 'hidden',
  },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#4a90e2',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  cell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  smallColumn: {
//   flex: 0.2, // atau 0.6 tergantung ukuran tabel
},
smallText:{
    fontSize:12,
    textAlign:'center'
}
});
