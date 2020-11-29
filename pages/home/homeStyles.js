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
    flex:2,
    marginBottom:50,
    borderRadius: 20,
    backgroundColor: "#fffff0",
    flexDirection: "column",
    borderWidth:2,
    borderColor:"#b0c4de",
    alignItems:"center"  
    },
    
    buttonStyles:{
    marginLeft:10,
    marginRight:10,
    backgroundColor:"#00008b",
    borderRadius:20,
    width: Dimensions.get('screen').width*0.8,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20
    },
    
    stayletext:{
    marginTop:15, 
    marginBottom:30,
    color:"#00008b",
    fontSize:20,
    },
    
    stayletext1:{
    color:"#ffffff",
    },
    
    image: {
    flex: 2,
    width:180,
    height:130,
    marginTop:60,
    marginBottom:70,
    width: Dimensions.get('screen').width*0.50,
    borderRadius: 15,    
    }
    
});     
export default stayle;