import {Text, View, StyleSheet} from 'react-native';


export default function splash(){
    return(
        <View style={styles.container}>
            <Text>login</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
    },
  });