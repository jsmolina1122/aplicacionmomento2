import React from 'react';
import { Text, View, Image, TouchableHighlight} from 'react-native';
import stayle from './homeStyles';

function home({navigation}){
    return(
        <View style = { stayle.container }>   
        <Image style = { stayle.image }source = {require('../../assets/logo.jpg')} >
        </Image>   
        <Text style = {stayle.stayletext} >
                           D A T E S W E B
                        </Text>
            <View style = { stayle.view1 } >
                    <TouchableHighlight style = {stayle.buttonStyles}  onPress = {() => navigation.navigate("DATES")}>
                        <Text style = {stayle.stayletext1} >
                            DATES
                        </Text>
                    </TouchableHighlight >
                    <TouchableHighlight style = {stayle.buttonStyles} onPress = {() => navigation.navigate("REGYSTRE")}>
                        <Text style = {stayle.stayletext1} >
                            SINGUP
                        </Text> 
                    </TouchableHighlight>
            </View>
        </View>          
    );
}

export default home;