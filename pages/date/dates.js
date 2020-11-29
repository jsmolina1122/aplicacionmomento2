import React from 'react';
import { Text, View, TextInput, TouchableHighlight, Alert} from 'react-native';
import stayle from './dateStyles';
import {useState} from 'react';

function dates(navigation){
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");

    //////api conection//
    const apibaseUrl = "http://192.168.1.3:3001";
    
    const CreateDates = async () => {
        try{
                    const response = await fetch(`${apibaseUrl}/CreateDates`,{
                    method: 'POST',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                    body: JSON.stringify({
                    name: name,
                    lastname: lastname,
                    id: id,
                    email: email,
                    phone: phone,
                    date: date,
                })
            });
                        const dataJson = await response.json();
                        Alert.alert("Date Programed Successfull");
                        console.log(dataJson);
        }catch(error){
                        console.log(error);
                     }
    }

    const validateDates = () =>{
        if(name == "" && lastname == "" && id == "" && email == "" && phone == "" && date ==""){
            Alert.alert("Alert","You Must Enter All The Data Of The Dates");
        }else{
            Alert.alert(
                'Alert',
                '¿Do you SAVE your date?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  { text: 'OK', onPress:(CreateDates)}
                ],
                { cancelable: false }
              );
        }
    }

    const DeleteDates = async() =>{
        try{
                    const response = await fetch(`${apibaseUrl}/DeleteDates`,{
                    method: 'DELETE',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                    body: JSON.stringify({
                    id: id,
                })
            });
                    const dataJson = await response.json();
                    Alert.alert("Date Delete Successfull");
                    console.log(dataJson);
        }catch(error){
                    console.log(error);
                    }
    }

    const validateDeleteDates = () =>{
        if(id == ""){
            Alert.alert("Alert","Enter ID To Delete")
        }else{
            Alert.alert(
            'Alert',
            '¿Do you want DELETE your date?',
            [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            { text: 'OK', onPress: (DeleteDates)}
            ],
            { cancelable: false }
            );
        }
    }

    const CreatePutDate = async() =>{
        try{
                        const response = await fetch(`${apibaseUrl}/CreatePutDates`,{
                        method: 'PUT',
                        headers: {
                        Accept: 'application/json',
                        'Content-Type':'application/json'
                    },
                        body: JSON.stringify({
                        name: name,
                        lastname: lastname,
                        id: id,
                        email: email,
                        phone: phone,
                        date: date
                    
                    })
                });
                        const dataJson = await response.json();
                        Alert.alert("Date Update Successfull");
                        console.log(dataJson);
        }catch(error){
                    console.log(error);
                    }
    }

    const validatePutdate = () =>{
        if(id == ""){
            Alert.alert('Alert',"Enter ID To Update")
        }else{
            Alert.alert(
                'Alert',
                '¿Do you UPDATE to Date?',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress:(CreatePutDate)}
                ],
                { cancelable: false }
            );
        }
    }
    
    return(
        <View style = { stayle.container } >      
            <View style = { stayle.view1 } >
                <TextInput style = {stayle.styleTextInput} placeholder = "Name"  onChangeText = {text => setName(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "LastName"  onChangeText = {text => setLastName(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "Id"   onChangeText = {text => setId(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "Email"  onChangeText = {text => setEmail(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "Phone"   onChangeText = {text => setPhone(text)}></TextInput>
                <TextInput style = {stayle.styleTextInput} placeholder = "Date"  onChangeText = {text => setDate(text)}></TextInput>
                
                    <TouchableHighlight style = {stayle.buttonStyles} onPress = {validateDates}>
                        <Text style = {stayle.stayletext1} >
                            SAVE
                        </Text>
                    </TouchableHighlight >
                    <TouchableHighlight style = {stayle.buttonStyles} onPress = {validateDeleteDates} >
                        <Text style = {stayle.stayletext1} >
                            DELETE
                        </Text> 
                    </TouchableHighlight> 
                    <TouchableHighlight style = {stayle.buttonStyles} onPress = {validatePutdate} >
                        <Text style = {stayle.stayletext1} >
                            UPTADE
                        </Text> 
                    </TouchableHighlight>      
            </View>
        </View>          
    );
}
   
export default dates;