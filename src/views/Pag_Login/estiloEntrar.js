import {StyleSheet} from 'react-native';

const estiloEntrar = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda:{
        backgroundColor: 'white', //cor de fundo
        width: '70%', //largura
        height: '90%',// altura
        borderRadius: 20, // deixar as pontas redondas
    },
    borda2:{
         backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 15, // deixar as pontas redondas
        marginTop: '50',
    },
    titulo:{
         fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

     area:{
         position: 'relative',
         left:'37%',
         top:'10%',
         width:'320px',
        height:'270px',
    },
    formulario:{
        position: 'absolute',
         display: 'block',
    },

    rodape:{
        backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 20, // deixar as pontas redondas
    },

    


}) 
export default estiloEntrar;