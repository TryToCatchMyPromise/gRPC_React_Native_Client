import React, {useState} from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View
} from 'react-native'

import {Colors} from 'react-native/Libraries/NewAppScreen'

// eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
const {AdderClient} = require('./api/adder_grpc_web_pb')
// eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
const {AddRequest, AddResponse} = require('./api/adder_pb')

const client = new AdderClient('http://localhost:9090', null, null)

const App = () => {
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

  const [result, setResult] = useState(0)

  const [firstInputValue, setFirstInputValue] = useState(0)
  const [secondInputValue, setSecondInputValue] = useState(0)

  function throttle(func, ms) {
    let isThrottled = false
    let savedArgs
    let savedThis

    function wrapper() {
      if (isThrottled) {
        savedArgs = arguments
        savedThis = this
        return
      }

      func.apply(this, arguments)

      isThrottled = true

      setTimeout(function () {
        isThrottled = false
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs)
          savedArgs = savedThis = null
        }
      }, ms)
    }

    return wrapper
  }

  const handleResultPress = () => {
    setResult(+firstInputValue + +secondInputValue)
  }

  // const callGrpcService = () => {
  //   const request = new AddRequest()
  //   request.???
  //
  //   client.add(request, {}, (err, response) => {
  //     if (response == null) {
  //       console.log(err)
  //     } else {
  //       console.log(response.???)
  //     }
  //   })
  // }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        // contentInsetAdjustmentBehavior="automatic"
        style={StyleSheet.compose(backgroundStyle, styles.scrollView)}
      >
        <Text>First number: </Text>
        <TextInput style={styles.input} onChangeText={(text) => setFirstInputValue(text)} />
        <Text>Second number: </Text>
        <TextInput style={styles.input} onChangeText={(text) => setSecondInputValue(text)} />
        <Button style={styles.resultButton} title='Result' onPress={throttle(handleResultPress, 5000)} />
        <View style={styles.resultContainer}>
          <Text>Result is {result}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
