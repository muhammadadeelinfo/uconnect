import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import NavigationBar from 'react-native-navbar';

  

  
  const titleConfig = {
    title: 'Organization-',
  };



export default class TopNavBar extends Component {
    render() {
        return (
            <View style={styles.container}>
            <NavigationBar
              title={titleConfig}
            />
          </View>
        )
    }
}


const styles = StyleSheet.create( {
    container: {
        paddingTop: 40,
        justifyContent:'flex-start',
        backgroundColor: 'white',
      flex: 1,
    },
  });
