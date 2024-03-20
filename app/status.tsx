import React, { useState } from "react";
import { Text, StyleSheet, View, Switch, Dimensions, Button } from "react-native";
import ColorsOp from "../const/colorsOp";
import RadiusSwitch from "../components/RadiusSwitch";
import IMRS_Button from "../components/IMRS_button";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Status = () => {
    const [currentStatus, setStatus] = useState('Clear');
    const [statusColor, setStatusColor] = useState('#2aad2c');

    const handleStatusChange = (status : number) => {
        console.log(status);
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
        console.log(currentStatus);
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
        statusButton
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
                    <Text style={descriptionText}>Clear</Text>
                    <View>
                        <Button
                        onPress={() => handleStatusChange(0)}
                        title='Clear'
                        color='#2aad2c'
                        />
                    </View>
                </View>
                <View style={statusContainer}>
                    <Text style={descriptionText}>Minimal Flooding</Text>
                    <Button
                        onPress={() => handleStatusChange(1)}
                        title='Minimal Flooding'
                        color='#dbc70f'
                        />
                </View>
                <View style={statusContainer}>
                    <Text style={descriptionText}>Flooded</Text>
                    <Button
                        onPress={() => handleStatusChange(2)}
                        title='Flooded'
                        color='#db0f0f'
                        />
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
        fontSize: 30
    },
    statusSectionContainer:  {
        paddingTop: screenHeight * 0.05
    },
    statusContainer: {
        paddingBottom: screenHeight * 0.05
    },
    statusButton: {
        color: '#505050'
    }
})

export default Status