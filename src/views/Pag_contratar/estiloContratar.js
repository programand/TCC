import {StyleSheet} from 'react-native';

const estiloContratar = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda1:{
        backgroundColor: 'white', //cor de fundo
        width: '70%', //largura
        height: '90%',// altura
        borderRadius: 20, // deixar as pontas redondas
        
    },

    borda2:{  //barra azul
        backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 10, // deixar as pontas redondas
        marginTop: '50',
    }, 
    cxnome:{   
        marginBottom: 10,
        borderRadius: 1, //lados da borda
        height: 30,     // altura
        borderWidth: 1, //largura da borda
        borderColor: 'black', //cor da borda
        justifyContent: 'center', // colocar o conteudo (botao) no centro
        alignItems: 'center', //alinhamento dos itens 
   },
})
export default estiloContratar;