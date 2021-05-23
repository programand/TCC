import {StyleSheet} from 'react-native';

const estiloInicial = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda:{
        backgroundColor: '#fffffff', //cor de fundo
        width: '70%', //largura
        height: '90%', //altura
        borderRadius: 20, // deixar as pontas redondas
    },
    botaoLogin:{
        margin: '',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 7,
        height: 30,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtbtlogin:{
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },
    img:{
        marginTop: 6,
         width: '100%', //largura
        height: '100%',// altura
        marginLeft: 'auto',
        marginRight: 'auto', 
    }
})
export default estiloInicial;