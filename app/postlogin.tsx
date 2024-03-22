import { View, Text, Button, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import IMRS_Button from "../components/IMRS_button";
import ColorsOp from '../const/colorsOp'
//import { verifyLogin } from "../fetch/UsernamePasswordVerifyDynamoDB";
import { LinearGradient } from "expo-linear-gradient";

const START = { x: 0.5, y: 0 }
const END = { x: 0.5, y: 1 }
const GRADIENT_COLORS = [ColorsOp.BL, ColorsOp.WH]
const GRADIENT_LOCATIONS = [0, 0.45, 1]
const MainPage: React.FC = () => {

  const navigateToHeatMap = () => {
    navigation.navigate('heatmap');
  };

  const navigateToStatus = () => {
    navigation.navigate('status');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={GRADIENT_COLORS} style={styles.container} locations={GRADIENT_LOCATIONS} start={START} end={END} >
      <TouchableOpacity style={styles.button} onPress={navigateToHeatMap}>
      <Text style={styles.buttonText}>Show Heat Map</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={navigateToStatus}>
      <Text style={styles.buttonText}>Share Status</Text>
    </TouchableOpacity>
      </LinearGradient>
   
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //alignItems: 'center',
      //backgroundColor: 'skyblue',
      backgroundColor: ColorsOp.JB, 
    },
    button: {
      backgroundColor: 'white',
      padding: 30,
      borderRadius: 30,
      marginTop: 10,
    },
    buttonText: {
      color: 'skyblue', 
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize:20,
    },
  });
  
export default MainPage;
