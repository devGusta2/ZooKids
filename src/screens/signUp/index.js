import {Text, Image, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './styles';



export default function signUp(){
    return(
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.imgTop} source={require('./img/OIP.jpg')}/>
            </View>
            <View style={styles.titleBox}>
                <Text style={styles.title}>
                    Não possui<br/>cadastro ?
                </Text>
                <Text style={styles.subTitle}>
                    Crie uma conta agora mesmo!
                </Text>
            </View>
            <View style={styles.formBox}>
                <View style={styles.lineForm}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput placeholder='Insira seu nome:' style={styles.inpt}/>
                </View>
                <View style={styles.lineForm}>
                    <Text style={styles.label}>Sobrenome:</Text>
                    <TextInput  placeholder='Insria seu sobrenome:'style={styles.inpt}/>
                </View>
                <View style={styles.lineForm}>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput placeholder='Insira seu E-mail:'style={styles.inpt}/>
                </View>
                <View style={styles.lineForm}>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput placeholder='Inseria Sua senha:'style={styles.inpt}/>
                </View>
                <View style={styles.lineForm}>
                    <Text style={styles.label}>Confirmação de senha:</Text>
                    <TextInput placeholder='Confirme sua senha:'style={styles.inpt}/>
                </View>
                <View style={styles.lineForm}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        </ScrollView>
    );
}