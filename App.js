import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
 // ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri:
            'https://saopaulofc.com.br/wp-content/uploads/2020/11/luciano-1.jpg',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>
             THE BOYS OF BOSCH
          </Text>
          <View style={styles.contentCenter}>
            <Image
              source={{
                uri:
                  'https://media4.giphy.com/media/9oHZQ2gEez8ti/giphy.gif',
              }}
              
              style={{
                width: 60,
                height: 60,
                marginTop: 100,
              }}
            />
            
            <Text style={styles.textStyle}>
              REACT É O BRAIA
            </Text>
          </View>
        </View>
       </ImageBackground> 
      <Button
        title="Alterar Cor"
        onPress={() => Alert.alert('Cor alterada')}
        onClick={(event) => onClick(id, acao, color)}      
          />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',    
    textAlign: 'center',    
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
  }
});

//function Click(id: string)


