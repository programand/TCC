import {StyleSheet} from 'react-native';


const estiloCad = StyleSheet.create({
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

    txtBV:{
         fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontFamily: "sans-serif",
    },

    txtCad:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

     botaoCad:{
        marginTop: '',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 7,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
     },

     txtbtCad:{
         fontSize: 14,
         color: 'black',
         fontWeight: 'bold',
         fontFamily: 'Time New'
     },

     pergunta:{
          fontSize: 20,
         color: 'black',
         fontWeight: 'bold',
         fontFamily: 'Arial',
         justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30, //margem esquerda
        marginRight: 20, //margem direita
        borderRadius: 7, //lados da borda
     },

     botaoEntrar:{
        marginTop: 5, 
        marginBottom: 10,
        marginLeft: 80, //margem esquerda
        marginRight: 20, //margem direita
        borderRadius: 7, //lados da borda
        height: 40,     // altura
        borderWidth: 2, //largura da borda
        borderColor: 'black', //cor da borda
        backgroundColor: '#87CEEB', //cor de fundo do botão
        justifyContent: 'center', // colocar o conteudo (botao) no centro
        alignItems: 'center', //alinhamento dos itens 
        //float: 'rigth',
     },

     botaotxtEntrar:{
         fontSize: 17,
         color: 'white',
         fontFamily: 'Time New',
         fontWeight: 'bold',
         textAlign: 'center',
         //backgroundColor: 'black',
     },

     img:{
        margin: 5,
         width: '70%', //largura
        height: '10%',// altura
        marginLeft: '1', //posição da margem na esquerda
        marginRight: '1',  //posição da margem a direita
    },





    rodape: {
	backgroundColor: '#48D1CC', //cor de fundo
        width: '100%', //largura
        height: '10%',// altura
        borderRadius: 10, // deixar as pontas redondas
	}
})
export default estiloCad;