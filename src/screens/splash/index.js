import {View, Text} from 'react-native';
import {React} from 'react-native';
import styles from './style.js';




  

export default function splash(props){
    setTimeout(()=>{
        const {navigation} = props;
        navigation.navigate('login');
        console.log("2 segundos");
    },1000)
    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>Zoo<br/>Kids</Text>
        </View>
    )
   
}


