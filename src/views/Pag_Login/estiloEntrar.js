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
         left:'20%',
         //top:'10%',
         width:'30px',
       height:'30px',
    },
     formulario:{
     position: 'relative',
        display: 'block',
        justifyContent: 'center'
     },
    cxnome:{   
        marginBottom: 10,
        borderRadius: 7, //lados da borda
        height: 20,     // altura
        borderWidth: 2, //largura da borda
        borderColor: 'black', //cor da borda
        justifyContent: 'center', // colocar o conteudo (botao) no centro
        alignItems: 'center', //alinhamento dos itens 
   },
   enviar:{
        marginBottom: 10,
        borderRadius: 6, //lados da borda
        height: 30,     // altura
        width: 100,
        borderWidth: 1, //largura da borda
        borderColor: 'black', //cor da borda
        justifyContent: 'center', // colocar o conteudo (botao) no centro
        alignItems: 'center', //alinhamento dos itens 
   },

    rodape:{
        backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 20, // deixar as pontas redondas
    },

    


}) 
export default estiloEntrar;