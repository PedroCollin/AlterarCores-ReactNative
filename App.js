import React, { Component } from "react";
import { View,Text, Button , StatusBar, SafeAreaView,  StyleSheet} from "react-native";



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { estiloBar: "default", corFundo:'white' }
        this.fundoVermelho = this.fundoVermelho.bind(this);
        this.fundoAmarelo = this.fundoAmarelo.bind(this);
        this.fundoVerde = this.fundoVerde.bind(this);
        this.fundoAzul = this.fundoAzul.bind(this);
    }

    fundoVermelho() {
        let aux = this.state;
        aux.corFundo='red'
        this.setState(aux);
    }

    fundoAmarelo() {
        let aux = this.state;
        aux.corFundo='yellow'
        this.setState(aux);
    }

    fundoVerde() {
      let aux = this.state;
      aux.corFundo='green'
      this.setState(aux);
  }

  fundoAzul() {
    let aux = this.state;
    aux.corFundo='blue'
    this.setState(aux);
}
    
    render() {
        return (
            <SafeAreaView style={{backgroundColor:this.state.corFundo,flex:1}}>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <View>
                
                
                <Text>Alterar Cores</Text>
                <Button title='Fundo Vermelho' color="red" onPress={this.fundoVermelho} />              
                <Button title='Fundo Amarelo' color="yellow" onPress={this.fundoAmarelo} />
                <Button title='Fundo Verde' color="green" onPress={this.fundoVerde} />
                <Button title='Fundo Azul' color="blue" onPress={this.fundoAzul} />
                
            </View>   
            </SafeAreaView>
        );
    }

}

