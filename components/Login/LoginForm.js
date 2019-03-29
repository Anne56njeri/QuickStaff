// import the libraries 

import React  from 'react';
import { View, Text, TextInput,AsyncStorage, TouchableOpacity,StyleSheet,Alert,StatusBar} from 'react-native';


// we create a component 
export default class LoginForm extends React.Component {
  _signInAsyc = async()=>{
    await AsyncStorage.setItem('userToken','abc');
    this.props.navigation.navigate('App')
  }
  render(){
     return (
    <View style={styles.container}>
     <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.passwordInput.focus()} 
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="done" 
                
                placeholder='Email or Mobile Num' 
                placeholderTextColor='rgba(225,225,225,0.7)'
     />
     <TextInput style= {styles.input}
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/> 
                 
     
    
     </View>
     )
  } 
} 
// define styles
 
const styles = StyleSheet.create({
  container:{
    
  },
  input:{
    height:40,
    backgroundColor: 'rgba(225,225,225,0.2)', 
    marginBottom:20,
    padding:10,
    color: '#fff'
  },
  buttonContainer:{
    backgroundColor: '#9ACD32',
    paddingVertical: 15 ,
   
   
},
buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
}
})