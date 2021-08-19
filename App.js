import React, { Component } from "react";
import { View, StatusBar, Text, Button } from "react-native";

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
            <View style={{backgroundColor:this.state.corFundo,flex:1}}>
                <Text>Alterar Cores</Text>
                <Button title='Fundo Vermelho' onPress={this.fundoVermelho} />
                <Button title='Fundo Amarelo' onPress={this.fundoAmarelo} />
                <Button title='Fundo Verde' onPress={this.fundoVerde} />
                <Button title='Fundo Azul' onPress={this.fundoAzul} />
            </View>
        );
    }
}