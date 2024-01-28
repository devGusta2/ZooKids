//programador Gustavo Rodrigues

//dependencias
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//telas
import login from './src/screens/login/index';
import splash from './src/screens/splash/index';

const Nav = createNativeStackNavigator();


export default function navigator(){
    return(
        
        <NavigationContainer>
           
            <Nav.Navigator initialRouteName='login'>
                <Nav.Screen name='splash' component={splash} options={{headerShown:false}}/>
                <Nav.Screen name='login' component={login} options={{headerShown:false}}/>
            </Nav.Navigator>
        </NavigationContainer>
    );
}