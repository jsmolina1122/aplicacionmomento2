import React from 'react';
import { Text, View,  TextInput, TouchableHighlight, Alert} from 'react-native';
import stayle from './regystreStayle';
import {useState} from 'react';


function about(navigation){

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
     //////api conection//
    const apibaseUrl = "http://192.168.1.3:3001";
   
        const Createregystre = async()=>{
            try{
                        const response = await fetch(`${apibaseUrl}/CreateRegystre`,{
                        method: 'POST',
                        headers: {
                        Accept: 'application/json',
                        'Content-Type':'application/json'
                    },
                        body: JSON.stringify({
                        name: name,
                        id: id,
                        email: email,
                        password: password,
                        
                    })
                });
                        const dataJson = await response.json();
                        Alert.alert("User Regystre Successfull");
                        console.log(dataJson);
            }catch(error){
                console.log(error);
            }
    }

    const ValidateRegystre = () =>{
        if(name == "" && id == "" && email == "" && password == ""){
            Alert.alert("Alert","You Must Enter All The Data");
        }else{
            Alert.alert(
                'Alert',
                '¿Do you SAVE to register?',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress:(Createregystre)}
                ],
                { cancelable: false }
            );
        }
    }

    const DeleteRegystre = async() =>{
        try{
            const response = await fetch(`${apibaseUrl}/DeleteRegystre`,{
            method: 'DELETE',
            headers: {
            Accept: 'application/json',
            'Content-Type':'application/json'
            },
                body: JSON.stringify({
                id:id,
            })
        });
        const dataJson = await response.json();
        Alert.alert("User Delete Successfull");

        console.log(dataJson);
        }catch(error){
        console.log(error);
        }
    }

    const ValidateDeleteRegystre = () =>{
        if(id == ""){
            Alert.alert('Alert',"Enter ID To Delete")
        }else{
            Alert.alert(
                'Alert',
                '¿Do you want DELETE your Regystre?',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: (DeleteRegystre)}
                ],
                { cancelable: false }
            );
        }
    }

    const CreatePutRegystre = async() =>{
            try{
                        const response = await fetch(`${apibaseUrl}/Putregystre`,{
                        method: 'PUT',
                        headers: {
                        Accept: 'application/json',
                        'Content-Type':'application/json'
                    },
                        body: JSON.stringify({
                        name: name,
                        id: id,
                        email: email,
                        password: password,
                        
                    })
                });
                        const dataJson = await response.json();
                        Alert.alert("regystre Update Successfull");
                        console.log(dataJson);
            }catch(error){
            console.log(error);
            }
    }

    const ValidatePutRegystre = () =>{
            if(id == ""){
                Alert.alert('Alert',"Enter ID To Update")
            }else{
                Alert.alert(
                    'Alert',
                    '¿Do you UPDATE to register?',
                    [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    { text: 'OK', onPress:(CreatePutRegystre)}
                    ],
                    { cancelable: false }
                );
            }
        }

    return(
        <View style = { stayle.container } >      
         <View style = { stayle.view1 } >
                <TextInput style = {stayle.styleTextInput} placeholder = "Name"  onChangeText = {text => setName(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "Id" onChangeText = {text => setId(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "Email"  onChangeText = {text => setEmail(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "Contraseña"  onChangeText = {text => setPassword(text)}></TextInput>
                
                    <TouchableHighlight style = {stayle.buttonStyles}  onPress = {ValidateRegystre} >
                        <Text style = {stayle.stayletext1}>
                            SAVE
                        </Text>
                    </TouchableHighlight >
                    <TouchableHighlight style = {stayle.buttonStyles} >
                        <Text style = {stayle.stayletext1} onPress = {ValidateDeleteRegystre}>
                            DELETE
                        </Text> 
                    </TouchableHighlight> 
                    <TouchableHighlight style = {stayle.buttonStyles} >
                        <Text style = {stayle.stayletext1} onPress = {ValidatePutRegystre}>
                            UPTADE
                        </Text> 
                    </TouchableHighlight>      
            </View>
        </View>          
    );
}
 
export default about;