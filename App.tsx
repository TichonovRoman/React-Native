import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, TextInput} from 'react-native';
import {useState} from "react";
import { IButton } from './Button/Button';
// import { Alert } from 'react-native-web';


export default function App() {

  const [a, setA] = useState('fg')
  const onChangeInput = (text: string)=> setA(text)

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <TextInput style={styles.input} value={a} onChangeText={onChangeInput}></TextInput>


      {/* <Text>My first app react native</Text>
      <Text>My first app react native</Text>
      <Text>My first app react native</Text>
      <Text>My first app react native</Text>
      <Text>My first app react native</Text>
      <ActivityIndicator style={styles.preloader} size="large" color={'red'} />
      <Button
        onPress={()=> Alert.alert('dfdfdf')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>
        {a}
      </Text>
      <Image style={{...styles.img, borderColor: 'red', borderWidth: 5 }} source={{uri: 'https://miro.medium.com/max/1200/1*GkR93AAlILkmE_3QQf88Ug.png'}}/> */}

      <IButton variant='primary'/>
      <IButton variant='error'/>
      <IButton variant='default'/>

    </View>
  );
}

const imageWidth = 100

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1c487',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preloader: {
    position: 'absolute'
     },
  img: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth/2
     },
     input: {
      height: 70,
      width: 200,
      backgroundColor: 'red'
     },
     button: {
      width: 90, 
      height: 40, 
      backgroundColor: 'green', 
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 10
     },
     buttonText: {
      color: 'white',
      fontSize: 24
     }
});
