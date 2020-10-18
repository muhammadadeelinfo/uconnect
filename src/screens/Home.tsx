import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../components/Button';
import { useNavigation } from '../utils';
import TopNavBar from '../components/TopNavBar'
import BottomNavBar from '../components/BottomNavBar'


export const Home = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <TopNavBar />
      <View style={styles.navigation}>
      </View>
      <View style={styles.body}>
      </View>

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 9,
  },
  loginView: {
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    height: 400,
  },
  footer: {
    flex: 1,
  },
});
