import {StyleSheet,Dimensions }from 'react-native';

const stayle = StyleSheet.create({
    container: {
    flex:2,
    backgroundColor: "white",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
    },
    
    view1: {
    flex:3,
    marginBottom:30,
    borderRadius: 20,
    backgroundColor: "#fffff0",
    flexDirection: "column",
    borderWidth:2,
    borderColor:"#b0c4de",
    alignItems:"center"  
    },
    
    styleTextInput:{
    marginTop:15,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"#add8e6",
    padding:18,
    width: Dimensions.get('screen').width*0.7,
    borderRadius:20
    },
    
    buttonStyles:{
    backgroundColor:"#00008b",
    borderRadius:20,
    width: Dimensions.get('screen').width*0.35,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10
    },
    
    stayletext:{
    marginTop:15, 
    },
    
    stayletext1:{
    color:"#ffffff",
    },
    
});    

export default stayle;