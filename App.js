import { StatusBar } from 'expo-status-bar';

import React from 'react';
import {StyleSheet, Text, View,TextInput,Button} from 'react-native';
import { Picker } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Calcu from 'react-native-vector-icons/AntDesign';               


export  default function  App () {
 const [peso,setPeso] = React.useState(0.00);
 const [altura,setAltura] = React.useState(0.00);
 const [imc,setImc] = React.useState(0.00);
 const [linguagem,setLinguagem] = React.useState(' ');
 console.log('valor armazenado',linguagem)

function calculaImc(peso,altura){
  var resultado = peso / (altura * altura)
  setImc(resultado)
  console.log('valor do imc:',imc)
  console.log('valor de altura',altura)
  console.log('valor de peso',peso)
}

  return (
    <View style={styles.views}>
    <Text style={{ fontSize: 20,fontWeight:'bold', color:"black"}}>   Calculadora de imc </Text>
    <Calcu name="calculator" size={40}></Calcu>
      
    <Text>{'\n'}</Text>
    <TextInput style={{ fontSize: 15, color:"#333333",borderRadius:1}}
    placeholder="Seu peso:"
    onChangeText={valor => setPeso(valor)}
    value={peso}

    
    ></TextInput>
    <TextInput style={{ fontSize: 15, color:"#333333"}}
     placeholder="Sua altura:"
     onChangeText={(valor) => setAltura(valor)}
     value={altura}
    ></TextInput>
      <Text>{'\n'}</Text>
    <Picker
    selectedValue={linguagem}
    style={{height: 50, width: 100}}
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
    <Text>{'\n'}</Text>
    </View>
    <Text>{'\n'}</Text>

  <Text>Peso: {peso} Altura: {altura} IMC: {imc.toFixed(3)} </Text>
  <Text>{'\n'}</Text>

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
   
    width: 300,
    height: 170,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
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
   Botao: {
    padding: 12,
    backgroundColor: '#DEDEDE',
    alignContent: 'center',
    borderRadius: 50,
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
  corpoView:{
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '25%',
    margin: 0,
    padding:28,
    paddingTop:-10,
    justifyContent: 'center',
    alignItems:'center',
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    marginBottom:10
  },
  botaoCalcular:{
  backgroundColor:'lightgray',
  elevation: 10,
  borderRadius:10,
  width: 110,
  height: 45,
  alignItems: "center"
  }
  });
