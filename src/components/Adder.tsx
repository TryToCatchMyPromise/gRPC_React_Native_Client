import {FC, useState} from 'react'
import {Button, ScrollView, StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import throttle from '../utils/throttle'

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const {AdderClient} = require('src/api/adder_grpc_web_pb')
// // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
// const {AddRequest, AddResponse} = require('src/api/adder_pb')

// const client = new AdderClient('http://localhost:9090', null, null)

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

export const Adder: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  const [result, setResult] = useState(0)

  const [firstInputValue, setFirstInputValue] = useState(0)
  const [secondInputValue, setSecondInputValue] = useState(0)

  // const callGrpcService = () => {
  //   console.log('grpc has been started!')
  //   const request = new AddRequest({x: 1, y: 2})
  //   console.log(request)
  //
  //   client.add(request, {}, (err: any, response: {AddResponse: () => any} | null) => {
  //     if (response == null) {
  //       console.log(err)
  //     } else {
  //       console.log(response.AddResponse())
  //     }
  //   })
  // }

  const handleResultPress = () => {
    // callGrpcService()
    // useRunActionWithUsers()
    setResult(+firstInputValue + +secondInputValue)
  }

  return (
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
  )
}
