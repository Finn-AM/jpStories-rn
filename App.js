import { StatusBar } from 'expo-status-bar';
import Home from './HomeComponent/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PageChild from './ReusedComponent/PageChild';
import { Ionicons } from '@expo/vector-icons';


import N1 from './HomeComponent/N1';
import N2 from './HomeComponent/N2';
import N3 from './HomeComponent/N3';
import N4 from './HomeComponent/N4';
import N5 from './HomeComponent/N5';

import StoryContent from './ReusedComponent/StoryContent';



import N1_Story1 from './N1Component/N1_Story1';

// N5

import N5_Story1 from './N5Component/N5_Story1';
import N5_Story2 from './N5Component/N5_Story2';
import N5_Story3 from './N5Component/N5_Story3';
import N5_Story4 from './N5Component/N5_Story4';
import N5_Story5 from './N5Component/N5_Story5';

import N5_Story6 from './N5Component/N5_Story6';
import N5_Story7 from './N5Component/N5_Story7';
import N5_Story8 from './N5Component/N5_Story8';
import N5_Story9 from './N5Component/N5_Story9';
import N5_Story10 from './N5Component/N5_Story10';


// N4

import N4_Story1 from './N4Component/N4_Story1';
import N4_Story2 from './N4Component/N4_Story2';
import N4_Story3 from './N4Component/N4_Story3';
import N4_Story4 from './N4Component/N4_Story4';
import N4_Story5 from './N4Component/N4_Story5';

import N4_Story6 from './N4Component/N4_Story6';
import N4_Story7 from './N4Component/N4_Story7';
import N4_Story8 from './N4Component/N4_Story8';
import N4_Story9 from './N4Component/N4_Story9';
import N4_Story10 from './N4Component/N4_Story10';

// N3

import N3_Story1 from './N3Component/N3_Story1';
import N3_Story2 from './N3Component/N3_Story2';
import N3_Story3 from './N3Component/N3_Story3';
import N3_Story4 from './N3Component/N3_Story4';
import N3_Story5 from './N3Component/N3_Story5';

import N3_Story6 from './N3Component/N3_Story6';
import N3_Story7 from './N3Component/N3_Story7';
import N3_Story8 from './N3Component/N3_Story8';
import N3_Story9 from './N3Component/N3_Story9';
import N3_Story10 from './N3Component/N3_Story10';
import N2_Story1 from './N2Component/N2_Story1';
import N2_Story2 from './N2Component/N2_Story2';
import N2_Story3 from './N2Component/N2_Story3';
import N2_Story4 from './N2Component/N2_Story4';
import N2_Story5 from './N2Component/N2_Story5';
import N2_Story6 from './N2Component/N2_Story6';
import N2_Story7 from './N2Component/N2_Story7';
import N2_Story8 from './N2Component/N2_Story8';
import N2_Story9 from './N2Component/N2_Story9';
import N2_Story10 from './N2Component/N2_Story10';
import N1_Story2 from './N1Component/N1_Story2';
import N1_Story3 from './N1Component/N1_Story3';
import N1_Story4 from './N1Component/N1_Story4';
import N1_Story5 from './N1Component/N1_Story5';
import N1_Story6 from './N1Component/N1_Story6';
import N1_Story7 from './N1Component/N1_Story7';
import N1_Story8 from './N1Component/N1_Story8';
import N1_Story9 from './N1Component/N1_Story9';
import N1_Story10 from './N1Component/N1_Story10';
import quiz from './Others/quiz';
import StoryGame from './Others/StoryGames';
import StoryList from './Others/StoryList';

// N2

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



// Home Stack

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4A90E2' },
        headerTitleStyle: { fontSize: 18 },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home - Japanese Story' }}
      />

      {/* Semua page tambahan masuk sini */}
      <Stack.Screen name="Page" component={PageChild} />
      <Stack.Screen name="N1" component={N1} />
      <Stack.Screen name="N2" component={N2} />
      <Stack.Screen name="N3" component={N3} />
      <Stack.Screen name="N4" component={N4} />
      <Stack.Screen name="N5" component={N5} />

      {/* N5 */}
      <Stack.Screen name="N5_1" component={N5_Story1} />
      <Stack.Screen name="N5_2" component={N5_Story2} />
      <Stack.Screen name="N5_3" component={N5_Story3} />
      <Stack.Screen name="N5_4" component={N5_Story4} />
      <Stack.Screen name="N5_5" component={N5_Story5} />
      <Stack.Screen name="N5_6" component={N5_Story6} />
      <Stack.Screen name="N5_7" component={N5_Story7} />
      <Stack.Screen name="N5_8" component={N5_Story8} />
      <Stack.Screen name="N5_9" component={N5_Story9} />
      <Stack.Screen name="N5_10" component={N5_Story10} />

      {/* N4 */}
      <Stack.Screen name="N4_1" component={N4_Story1} />
      <Stack.Screen name="N4_2" component={N4_Story2} />
      <Stack.Screen name="N4_3" component={N4_Story3} />
      <Stack.Screen name="N4_4" component={N4_Story4} />
      <Stack.Screen name="N4_5" component={N4_Story5} />
      <Stack.Screen name="N4_6" component={N4_Story6} />
      <Stack.Screen name="N4_7" component={N4_Story7} />
      <Stack.Screen name="N4_8" component={N4_Story8} />
      <Stack.Screen name="N4_9" component={N4_Story9} />
      <Stack.Screen name="N4_10" component={N4_Story10} />

      {/* N3 */}
      <Stack.Screen name="N3_1" component={N3_Story1} />
      <Stack.Screen name="N3_2" component={N3_Story2} />
      <Stack.Screen name="N3_3" component={N3_Story3} />
      <Stack.Screen name="N3_4" component={N3_Story4} />
      <Stack.Screen name="N3_5" component={N3_Story5} />
      <Stack.Screen name="N3_6" component={N3_Story6} />
      <Stack.Screen name="N3_7" component={N3_Story7} />
      <Stack.Screen name="N3_8" component={N3_Story8} />
      <Stack.Screen name="N3_9" component={N3_Story9} />
      <Stack.Screen name="N3_10" component={N3_Story10} />

      {/* N2 */}
      <Stack.Screen name="N2_1" component={N2_Story1} />
      <Stack.Screen name="N2_2" component={N2_Story2} />
      <Stack.Screen name="N2_3" component={N2_Story3} />
      <Stack.Screen name="N2_4" component={N2_Story4} />
      <Stack.Screen name="N2_5" component={N2_Story5} />
      <Stack.Screen name="N2_6" component={N2_Story6} />
      <Stack.Screen name="N2_7" component={N2_Story7} />
      <Stack.Screen name="N2_8" component={N2_Story8} />
      <Stack.Screen name="N2_9" component={N2_Story9} />
      <Stack.Screen name="N2_10" component={N2_Story10} />

      {/* N1 */}
      <Stack.Screen name="N1_1" component={N1_Story1} />
      <Stack.Screen name="N1_2" component={N1_Story2} />
      <Stack.Screen name="N1_3" component={N1_Story3} />
      <Stack.Screen name="N1_4" component={N1_Story4} />
      <Stack.Screen name="N1_5" component={N1_Story5} />
      <Stack.Screen name="N1_6" component={N1_Story6} />
      <Stack.Screen name="N1_7" component={N1_Story7} />
      <Stack.Screen name="N1_8" component={N1_Story8} />
      <Stack.Screen name="N1_9" component={N1_Story9} />
      <Stack.Screen name="N1_10" component={N1_Story10} />


      <Stack.Screen name="StoryGame" component={StoryGame} />
      <Stack.Screen name="StoryList" component={StoryList} />


      <Stack.Screen name="quiz" component={quiz} />
    </Stack.Navigator>
  );
}








// Story Stack



function StoryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#96B6C5' },
        headerTitleStyle: { fontSize: 18 },
      }}
    >
      <Stack.Screen 
        name="StoryContent" 
        component={StoryContent} 
        options={{ title: 'Quiz' }}
      />
      <Stack.Screen name="quiz" component={quiz} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'HomeTab') {
              return <Ionicons name="home" size={size} color={color} />;
            } else if (route.name === 'StoryTab') {
              return <Ionicons name="book" size={size} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack} 
          options={{ title: 'Home' }}
        />
        <Tab.Screen 
          name="StoryTab" 
          component={StoryStack} 
          options={{ title: 'Quiz' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}