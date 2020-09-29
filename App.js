import { StatusBar } from 'expo-status-bar';

import React from 'react';
import {StyleSheet, Text, View,TextInput,Button} from 'react-native';
import { Picker } from 'react-native';
import Calculadora from 'react-native-vector-icons/AntDesign';               


export  default function  App () {
 const [peso,setPeso] = React.useState(0.00);
 const [altura,setAltura] = React.useState(0.00);
 const [imc,setImc] = React.useState(0);
 const [linguagem,setLinguagem] = React.useState(' ');
 console.log('valor armazenado',linguagem)

function calculaImc(peso,altura){
  var resultado = peso / (altura*altura)
  setImc(resultado)
  console.log('valor do imc:',imc)
  console.log('valor de altura',altura)
  console.log('valor de peso',peso)

  if (resultado < 18.5) {
    alert("Baixo Peso!!" + resultado.toFixed(2))
  }
  else if (resultado >=18.5 && resultado<24.9) {
    alert("Peso saudável!!" + resultado.toFixed(2))
  }
  else if (resultado >=25 && resultado<29.9) {
    alert("Sobrepeso!!" + resultado.toFixed(2))
  }
  else if (resultado >= 30) {
    alert("Obesidade!!!" + resultado.toFixed(2))
  }
}

  return (
    <View style={styles.views}>
    <Text style={{ fontSize: 20,fontWeight:'bold', color:"black"}}>Calculadora de imc </Text>
    
    <Calculadora name="calculator" size={40}></Calculadora>
    
    <Text>{'\n'}</Text>
    <Text style={{ fontSize: 15,fontWeight:'arial', color:"black"}}>Seu peso </Text>
    <TextInput style={{ fontSize: 15, color:"#333333",borderRadius:1}}
    placeholder="Digite seu peso:"
    style={styles.views3}
    onChangeText={valor => setPeso(valor)}
    value={peso}

    
    ></TextInput>
    <Text style={{ fontSize: 15,fontWeight:'arial', color:"black"}}>Sua altura </Text>
    <TextInput style={{ fontSize: 15, color:"#333333"}}
     placeholder="1.75cm:"
     style={styles.views3}
     onChangeText={(valor) => setAltura(valor)}
     value={altura}
     
    ></TextInput>
      
    <Picker
    selectedValue={linguagem}
    style={{height: 30, width: 100,borderRadius:10}}
    onValueChange={(itemValue, itemIndex) =>
    setLinguagem(itemValue)
    
    
    
}>
  
  
<Picker.Item label="Criança" value="criança" />
<Picker.Item label="Adulto" value="adulto" />
<Picker.Item label="Idoso" value="idoso" />


    </Picker>
    
    <Text>{'\n'}</Text>
    <View style={styles.botaoCalcular}>
    
    <Button title="calcular" color="#333333" backgroundColor="blue" onPress={() => calculaImc(peso,altura)}></Button>
    </View>
    
  <Text>Peso: {peso} Altura: {altura} IMC: {imc.toFixed(2)} </Text>
  <View style={{ alignItems: 'center' , flexDirection: 'row'}}>
    
  </View>
  </View>
 
  );
}

                   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views:{
    
    width: 400,
    height: 790,
    margin: 7,
    borderRadius: 10,
    elevation:15,
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 10,
  },

    child1: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    paddingTop: 60,
    width: 1000,
    height: 1000

  }, 

  views2: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },
  child2: {
    backgroundColor:'lightgray',
    shadowColor: '#DEDEDE',
    alignItems: 'center',
    
    
  
    width: 200,
    height: 100,
    shadowOpacity: 0.0,
    shadowRadius: 3,
    shadowOffset:  { width: 0, height: 2 },
    elevation: 5,
    padding:30,
    margin: 20,
    
  },
  botaoCalcular:{
  backgroundColor:'silver',
  elevation: 6,
  borderRadius:10,
  width: 100,
  height: 37,
  alignItems: "center"
  }
  });
