import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import { AntDesign,Feather,MaterialIcons } from '@expo/vector-icons';


export default class BottomNavBar extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={styles.fixToText}>
                <View style={styles.buttonStyle}>
                <AntDesign name="home" size={24} color="white" />
                <Button
                  title="home-"
                  color='grey'
                  onPress={() => Alert.alert('Left button pressed')}
                />
                </View>
                <View style={styles.buttonStyle}>
                <Feather name="message-square" size={24} color="white" />
                <Button
                  title="pm's-"
                  color='grey'
                  onPress={() => Alert.alert('Left button pressed')}
                />
                </View>
                <View style={styles.buttonStyle}>
                <Feather name="search" size={24} color="white" />
                <Button
                  title="search-"
                  color='grey'
                  onPress={() => Alert.alert('Left button pressed')}
                />
                </View>
                <View style={styles.buttonStyle}>
                <MaterialIcons name="person-outline" size={24} color="white" />
                <Button
                  title="you-"
                  color='grey'
                  onPress={() => Alert.alert('Left button pressed')}
                />
                </View>
              </View>
          </View>
        )
    }
}


const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'white',
      flex: 1,
    },
    fixToText: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      // justifyContent: 'space-between',
    },
    buttonStyle: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
    }
  });
