//programador Gustavo Rodrigues

//dependencias
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//telas
import login from './src/screens/login/index';
import splash from './src/screens/splash/index';
import signup from './src/screens/signUp/index';

const Nav = createNativeStackNavigator();


export default function navigator(){
    return(
        
        <NavigationContainer>
           
            <Nav.Navigator initialRouteName='signup'>
                <Nav.Screen name='splash' component={splash} options={{headerShown:false}}/>
                <Nav.Screen name='login' component={login} options={{headerShown:false}}/>
                <Nav.Screen name='signup' component={signup} options={{headerShown:false}}/>
            </Nav.Navigator>
        </NavigationContainer>
    );
}