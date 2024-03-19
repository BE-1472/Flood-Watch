import React, { useState } from "react";
import { Text, StyleSheet, View, Switch } from "react-native";
import { Link } from "expo-router";
import ColorsOp from "../const/colorsOp";
import RadiusSwitch from "../components/RadiusSwitch";
import IMRS_Button from "../components/IMRS_button";

const Status = () => {
    let shooterDescription:string = "Possible Zone AO" //temp
    let shootingLocation:string = "Pleasnt Park"

    const { 
        container, 
        warningMsgText, 
        warningMsgWrapper,
        descriptionText,
        descriptionWrapper,
        locationText,
        locationWrapper,
        cam_button
    } = styles

    return (
        <View style={container}>
            <View style={warningMsgWrapper}>
                <Text style={warningMsgText}>Warning</Text>
                <Text style={warningMsgText}>Active Flooding in your Area!</Text>
            </View>
            <View style={descriptionWrapper}>
                <Text style={descriptionText}>Description:</Text>
                <Text style={descriptionText}>{shooterDescription}</Text>
            </View>
            <View style={locationWrapper}>
                <Text style={locationText}>Location:</Text>
                <Text style={locationText}>{shootingLocation}</Text>
            </View>
            <View style={cam_button}>
                    <Link href={'/camera'} asChild>
                            <IMRS_Button title={'Upload Picture'} color='white' backgroundColor={ColorsOp.BL} />
                    </Link>
            </View>
            <View>
                <RadiusSwitch 
                    backgroundColor= {ColorsOp.LG}
                    text='Not bad, easy to drive through' 
                />
                <RadiusSwitch 
                    backgroundColor='yellow' 
                    text='A little bad, may have trouble driving'
                />
                <RadiusSwitch 
                    backgroundColor= {ColorsOp.BR}
                    text='Really bad, Impossible to drive through'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: ColorsOp.BL
    },
    warningMsgWrapper: {
        paddingTop: 60,
        paddingBottom: 40
    },
    warningMsgText: {
        color: ColorsOp.RO,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    descriptionWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40
    },
    descriptionText: {
        color: ColorsOp.JB,
        fontSize: 20
    },
    locationWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40
    },
    locationText: {
        color: ColorsOp.JB,
        fontSize: 20,
        alignContent: 'flex-start'
    },
    cam_button: {
        alignItems: 'center',
        padding: 20
    }
})

export default Status