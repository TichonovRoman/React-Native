import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator,Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, TextInput, SafeAreaView, FlatList, ScrollView} from 'react-native';
import {useState} from "react";
import { IButton } from './Button/Button';
// import { Alert } from 'react-native-web';


export default function App() {

  const [a, setA] = useState('fg')
  const onChangeInput = (text: string)=> setA(text)

  const data = new Array(100).fill(null).map((_, index)=>({
    id: index +1,
    title: '_Button_' + (index + 1)
  }))

  return (
    <View style={styles.container}>
      <SafeAreaView style={{justifyContent: 'center'}}>
        <ScrollView showsHorizontalScrollIndicator horizontal={true} style={{flexDirection: 'row'}}>
          <View style={{height: 50, width: 50, backgroundColor: 'red', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'blue', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'green', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'yellow', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'gold', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'black', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'black', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'black', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'black', margin: 10}}/>
          <View style={{height: 50, width: 50, backgroundColor: 'black', margin: 10}}/>
         
        </ScrollView>
     
      {/* <FlatList
        data={data}
        keyExtractor = {(item)=>item.id.toString()}
        renderItem = {({ item, index, separators })=><IButton title = {item.title}/>}
        stickyHeaderIndices = {[0, 10, 20]}
        ListHeaderComponent = {()=><View><Text>Ffgfg</Text></View>}
        // а это показывается если массив  data пустой, т.е. например пока не пришел ответ с сервера
        ListEmptyComponent = {()=><View><Text>Empty</Text></View>}
        
      /> */}
      {/* <ScrollView>
        {data.map((el)=><IButton title = {el.title}/>)}
      </ScrollView> */}
      


      {/* <TextInput style={styles.input} value={a} onChangeText={onChangeInput}></TextInput> */}
     
      </SafeAreaView>
      {/* <StatusBar style='auto'/> */}


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
{/* 
      <IButton variant='primary' onPress={()=> Alert.alert('prumary')}/>
      <IButton variant='error' onPress={()=> Alert.alert('error')}/>
      <IButton variant='default' onPress={()=> Alert.alert('default')}/>
      <IButton onPress={()=> Alert.alert('default')}/> */}

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
