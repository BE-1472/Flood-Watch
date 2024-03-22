import React, { useState } from "react";
import { Text, StyleSheet, View, Switch, Dimensions, Button, Pressable } from "react-native";
import ColorsOp from "../const/colorsOp";
import RadiusSwitch from "../components/RadiusSwitch";
import IMRS_Button from "../components/IMRS_button";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const buttonWidth = screenWidth * .75;
const buttonHeight = screenHeight * .06;

const Status = () => {
    const [currentStatus, setStatus] = useState('Clear');
    const [statusColor, setStatusColor] = useState('#2aad2c');

    const handleStatusChange = (status : number) => {
        //console.log(status);
        if(status == 0 ) {
            setStatus('Clear');
            setStatusColor('#2aad2c')
        }
        else if(status == 1) {
            setStatus('Minimal Flooding');
            setStatusColor('#dbc70f');
        }
        else if(status == 2) {
            setStatus('Flooded');
            setStatusColor('#db0f0f');
        }
        //console.log(currentStatus);
        }   

    const { 
        container,
        titleContainer,
        titleText,
        descriptionText,
        currentStatusContainer,
        currentStatusTitle,
        currentStatusText,
        statusSectionContainer,
        statusContainer,
        statusButton,
        clearButton,
        minimalFloodingButton,
        floodedButton,
        buttonText
    } = styles

    return (
        <View style={container}>
            <View style={titleContainer}>
                <Text style={titleText}>Report Flood Status</Text>
                <Text style={descriptionText}>Report the status of flooding near you</Text>
            </View>
            <View style={currentStatusContainer}>
                <Text style={currentStatusTitle}>Your Current Status</Text>
                <Text style={[styles.currentStatusText, {color: statusColor}]}>{currentStatus}</Text>
            </View>
            <View style={statusSectionContainer}>
                <View style={statusContainer}>
                    <View style={statusButton}>
                        <Pressable onPress={() => handleStatusChange(0)} style={clearButton}>
                            <Text style={buttonText}>Clear</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={statusContainer}>
                    <View style={statusButton}>
                        <Pressable onPress={() => handleStatusChange(1)} style={minimalFloodingButton}>
                            <Text style={buttonText}>Minimal Flooding</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={statusContainer}>
                    <View style={statusButton}>
                    <Pressable onPress={() => handleStatusChange(2)} style={floodedButton}>
                        <Text style={buttonText}>Flooded</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.JB
    },
    titleContainer: {
        alignItems: 'center',
        paddingTop: screenHeight * 0.05
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    descriptionText: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    currentStatusContainer: {
        paddingTop: screenHeight * 0.025,
        alignItems: 'center'
    },
    currentStatusTitle: {
        fontSize: 25,
        color: '#FFFFFF'
    },
    currentStatusText: {
        fontSize: 30,
        marginBottom: screenHeight * .09,
    },
    statusSectionContainer:  {
        paddingTop: screenHeight * 0.05
    },
    statusContainer: {
        paddingBottom: screenHeight * 0.05
    },
    statusButton: {
        alignItems: 'center'
    },
    clearButton: {
        
        backgroundColor: '#2aad2c',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: buttonWidth,
        minHeight: buttonHeight,
        borderRadius: 20,
        borderWidth: 2,
        elevation: 3
    },
    minimalFloodingButton:{
        backgroundColor: '#b8a70d',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: buttonWidth,
        minHeight: buttonHeight,
        borderRadius: 20,
        borderWidth: 2,
        elevation: 3
    },
    floodedButton: {
        backgroundColor: '#db0f0f',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: buttonWidth,
        minHeight: buttonHeight,
        borderRadius: 20,
        borderWidth: 2,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 32
    }
})

export default Status //#b8a70d