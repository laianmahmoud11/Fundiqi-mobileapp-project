import { Image, StyleSheet, Text, View } from "react-native";
import { Rating } from 'react-native-ratings';


import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
const HotelListCard = ({id,name, country,city,address, price,rating, image,description}: any) => {


const[favorite,SetFavorite]= useState<"heart-outline"|"heart">("heart-outline");
const[color,SetColor]= useState("");

const FavoriteHotels =()=>{
     SetColor("#424141");
if(favorite==="heart-outline"){
  SetFavorite("heart");
  SetColor("red");
}
else{
    SetFavorite("heart-outline");
      SetColor("#424141");

}
}
    return (
        <View style={styles.container} key={id}>
            
                <Image  style={styles.images} source={ {uri: image}} />

            <View style={styles.info}>
               <View style={{flexDirection:"row", justifyContent: "space-between", marginVertical:5}}>
                <Text style={{fontSize:20, color:"#003B95",fontWeight: 'bold'}}>{name} </Text> 
                      <Ionicons name= {favorite} size={24}  style={{ color:color} }  onPress={FavoriteHotels}/>
                </View>

           <Rating
             type="star"
              ratingCount={5} 
              imageSize={12} 
               startingValue={rating} 
               readonly style={{alignSelf: "flex-start" , marginVertical:5}}   />
               
                
                     <Text style={{color:"000000", marginVertical:5}}>
                         <Ionicons name="location-outline" size={16} color="#FFC107" style={{marginRight: 4}} />
                        {country}     {city}     {address}
                        </Text> 
                     
                      
                   
                  
                        <Text style={{color: "000000", marginVertical:5}}>
                             <Ionicons name="bed-outline" size={16} color="#FFC107" style={{marginRight:4}} />
                            {description}</Text>
       
                 <Text style={{fontSize:20 ,fontWeight: 'bold', color:"#003B95" , alignSelf:"flex-end" ,marginBottom:5}}>${price}</Text>
            </View>
            </View>
      
    )
}

const styles = StyleSheet.create({
    
container:{
    flex: 1,  
   
 flexDirection:"row",
  borderWidth:1,
        borderColor: "#E9E9E9",
        backgroundColor: "#ffff",
        borderRadius: 10,
  marginHorizontal:"2.5%",
  marginVertical:"2%"
   
},
images:{
  flex:1.2,
   borderRadius:5,
   borderColor:"black",
    borderWidth:1,
  
},
info:{
 flex:2,   
    justifyContent: "space-between" ,
 padding:20,
},

});

export default HotelListCard;