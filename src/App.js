import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Adder} from '../src/components/Adder'

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const styles = StyleSheet.create({
    input: {
      marginVertical: 10,
      marginHorizontal: 5,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: 'blue',
      borderRadius: 7
    },
    scrollView: {
      paddingVertical: 20
    },
    resultButton: {
      borderRadius: 40,
      marginVertical: 5,
      height: 50
    },
    resultContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 5,
      marginVertical: 15
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600'
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400'
    },
    highlight: {
      fontWeight: '700'
    }
  })

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Adder />
    </SafeAreaView>
  )
}
