import React from "react";
import { View,Text, StyleSheet, TextInput,FlatList,Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Home({navigation}){
    const shirts = [
        { name : "Zara plain white t-shirt" , id : 1, img : require("../assets/haryo-setyadi-acn5ERAeSb4-unsplash.jpg") },
        { name : "Black 705 t-shirt" , id : 2, img : require("../assets/ryan-hoffman-6Nub980bI3I-unsplash.jpg") },
        { name : "Black 705 sweat shirt" , id : 3, img : require("../assets/ryan-hoffman-A7f7XRKgUWc-unsplash.jpg") },
        { name : "Black Yahweh Yirih t-shirt " , id : 4, img : require("../assets/faith-yarn-Wr0TpKqf26s-unsplash.jpg") },
        { name : "Black 705 t-shirt" , id : 5, img : require("../assets/ryan-hoffman-u6n1HrW0sdQ-unsplash.jpg") },
        { name : "polo t-shirt" , id : 6, img : require("../assets/sahil-moosa-m1MRYp556Ew-unsplash.jpg") },
        { name : "Gildan t-shirt" , id : 7, img : require("../assets/toa-heftiba-9PVUNBgqVRo-unsplash.jpg") },
        { name : "fruit of the loom" , id : 8, img : require("../assets/uis-quintero-3qqiMT2LdR8-unsplash.jpg")},
    ]
    
    return(
    <View style = {styles.homeContainer}>
            <View style = {styles.searchView}>
                <FontAwesome5 name="search" style= {{marginTop: 8, marginLeft: 8,}} size={20} color="black" />
                <TextInput placeholder = "Search Item" placeholderTextColor="black" style= {{ paddingLeft: 2, padding: 10,}}>
                </TextInput>
            </View>

            <View >
                <FlatList
                    
                    keyExtractor = { (item) => item.id}
                    data = {shirts}
                    renderItem = {({item}) =>(
                        <View style = {styles.card}>
                            
                            <Image
                              source ={item.img} 
                              style = {styles.img}
                            />
                            <Text style ={styles.label}>{item.name} </Text>
                        </View>
                    )}
                />   
            </View>
         
                
            
       
    </View> 
        
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1, 
        padding:20,
        
    },
    searchView :{
        flexDirection:'row', 
        marginRight :10,
        marginBottom : 10,
        borderStyle: 'solid', 
        width: 300,
        borderWidth : 1,
        borderRadius: 10,
        alignSelf : "center",
    }, 
    
    item : {
        
        borderWidth : 1,
        marginBottom : 5,
        marginTop:15,
        alignSelf : "center",
        width : 280,
        height : 220,
        marginHorizontal : 5,
        textAlign : "center",
        borderRadius : 15

    },
    card :{
        height : 270,
        borderWidth : 1,
        marginBottom : 20,

    },
    img :{
        borderWidth : 1,
        marginBottom : 5,
        marginTop:15,
        alignSelf : "center",
        width : 280,
        height : 220,
        marginHorizontal : 5,
        textAlign : "center",
        borderRadius : 15
    },
    label:{
        textAlign: "center",
    }

})