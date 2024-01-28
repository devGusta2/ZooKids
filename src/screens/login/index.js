import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
export default function splash(){
    return(
        <View style={styles.container}>
            {/*Image tucan and greetins*/}
            <View style={styles.top}>
                <Image style={styles.imgTop} source={require('./img/tucano.png')}/>
            </View>
        

            {/*login inputs*/}
            <View style={styles.formBox}>
                <View style={styles.inptAndLabel}>
                    <Text style={styles.label}> E-mail</Text>
                    <TextInput style={styles.inpt} placeholder='Insira seu email'/>
                </View>
                <View style={styles.inptAndLabel}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.inpt} placeholder='Insira sua senha'/>
                 
                </View>
                <View style={styles.inptAndLabel}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                    <Text>Ou</Text>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.textButton1}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}


