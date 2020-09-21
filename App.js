import { StatusBar } from 'expo-status-bar';

import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View,Button,TouchableOpacity,TextInput} from 'react-native';






export default function  App () {

  state={
    Criança:false,
    Adulto:false,
    Idoso:false
  }
  
  

  return (
    <View style={[styles.child1]}>
    <Text style={{ fontSize: 20,fontWeight:'bold', color:"#333333"}}>                   Calculadora de imc </Text>
    <View style={[styles.views]}>
    
    <TextInput style={{ fontSize: 15, color:"#333333"}}>         Qual seu peso: </TextInput>
    <TextInput style={{ fontSize: 15, color:"#333333"}}>         Qual sua altura: </TextInput>
    <CheckBox checar = {this.state.Criança}
    onPress={() => this.umPressionado()}
    />
    <Text>Criança</Text>
    <CheckBox checar= {this.state.Adulto}
    onPress={() => this.doisPressionado()}
    />
    <Text>Adulto</Text>

    <CheckBox checar= {this.state.Idoso}
    onPress={() => this.tresPressionado()}
    />
    <Text>Idoso</Text>
      </View>
      
      
      <Text>{'\n'}</Text>
    <Text style={{ fontSize: 20,height:100, color:"#333333"}}>                   Resultado IMC: </Text>
    
    
    














   
    
    <TouchableOpacity style={styles.child2} 
              onPress={() => navigation.navigate('Calculando')}>
              <Text>Calcular peso</Text>
          </TouchableOpacity>
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
  });
