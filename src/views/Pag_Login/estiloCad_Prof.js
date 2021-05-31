import {StyleSheet} from 'react-native';

const estiloCad_Profissional = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    borda:{
        backgroundColor: 'white', //cor de fundo
        width: '70%', //largura
        height: '100%',// altura
        borderRadius: 20, // deixar as pontas redondas
    },
    borda2:{
         backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 10, // deixar as pontas redondas
        marginTop: '50',
    },
    titulo:{
         fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        height: '20%',
    },

    
      area:{
         position: 'relative',
         left:'20%',
         //top:'10%',
         width:'60px',
       height:'60px',
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
    botaovoltar:{
          marginTop: 200, 
        marginBottom: 10,
        marginLeft: 80, //margem esquerda
        marginRight: 20, //margem direita
        borderRadius: 5, //lados da borda
        height: 30,     // altura
        borderWidth: 2, //largura da borda
        borderColor: '#48D1CC', //cor da borda
        backgroundColor: '', //cor de fundo do botão
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
    txtbt:{
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Arial'
    },


     rodape:{
        backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '8%',// altura
        borderRadius: 10, // deixar as pontas redondas

    },

}) 
export default estiloCad_Profissional;