  import { Searchbar } from 'react-native-paper';
  

const InputSearch = ({placeholder ,value,onChangeText}:any) => {
return(

       <Searchbar
         placeholder={placeholder}
         value={value} 
          onChangeText={onChangeText}  
           style={{ borderWidth: 3, borderRadius: 2, backgroundColor:"#ffff", borderColor:"#FFC107",  elevation: 0  , }}  />

);

 }
 export default InputSearch ;