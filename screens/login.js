import React from "react";
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';
    import { AntDesign } from '@expo/vector-icons';
   

const  backgroundImage  = {uri : "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }

export default function login({navigation}){
    return(


        <View style ={styles.loginContainer}>
            <ImageBackground 
                style = {styles.picture}
                source = {backgroundImage}
                resizeMode = "cover"
                > 
                <View style = {styles.contentView}>
                    <Text style ={styles.loginText}>Login</Text>
                    <View style = {styles.Password}>
                        <Ionicons 
                            name="person" 
                            size={24} 
                            color="#FDFEFE" 
                        />

                        <TextInput style = {styles.inputs} 
                            placeholder="Username"
                            placeholderTextColor ="#FDFEFE"
                        />
                        
                    </View>
                    <View style = {styles.Password}>
                    <AntDesign name="lock" size={24} color="#FDFEFE" />
                        <TextInput style = {styles.inputs} placeholder="password" placeholderTextColor ="#FDFEFE"></TextInput>
                    </View>
                    
                    <TouchableOpacity style = {styles.loginButton} onPress ={() => navigation.navigate('Home')}>
                        <Text>login</Text>
                    </TouchableOpacity>

                    <Text style ={{color : "#FDFEFE", marginTop : 30}}>Or connect with</Text>

                    <View style = {styles.loginOptions}>
                        
                    <TouchableOpacity style = {styles.apple}>
                    <AntDesign name="apple1" size={15} color="black"  style={{alignSelf: "center"}}/>
                        <Text style ={{textAlign :"center", paddingLeft : 10,}}>Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.facebook}>
                    <AntDesign name="facebook-square" size={15} color="#FDFEFE"  style = {{alignSelf: "center"}}/>
                        <Text style ={{textAlign :"center"}}>Facebook</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex : 1,
        justifyContent : "center",
        
        
        
    },
    inputs: {
        borderBottomWidth: 1,
        borderColor: "#FDFEFE",
        width : 250,
        paddingVertical:8,
        marginTop: 30,
        color: "#FDFEFE",
        textAlign : "left",
        
        
    },
    picture: {
       flex :1,
       
    },
    contentView:{
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText :{
        color : "#FDFEFE",
        fontSize: 30,
    },
    loginButton : {
        backgroundColor : "#85C1E9",
        marginTop: 100,
        paddingHorizontal: 120,
        paddingVertical:8, 
        borderRadius : 15,

    },
    Password:{
        flexDirection: 'row',
        paddingBottom: 10,
        marginBottom: 20 

    },
    loginOptions : {
        flexDirection: "row",
        marginTop : 10
    },
    apple :{
        backgroundColor : "#FDFEFE",
        width: 100,
        paddingVertical:8, 
        borderRadius : 15,
        
        

    },
    facebook:{
        backgroundColor : "#4267B2",
        marginLeft : 20,
        width: 100,
        paddingVertical:8, 
        borderRadius : 15,
    }
})