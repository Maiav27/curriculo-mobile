
import { View , Image, StyleSheet, Text, Linking} from "react-native"

const Perfil = () => {
    return(
        <View  style={styles.container}>
          <Image style={styles.image} source={require('./../../assets/perfil.jpg')}/>
          <View>
              <Text style={{fontSize : 18}}>Meu nome é Vinícius Maia, sou estudante  da Universidade Católica de Pernambuco, no curso de Sistemas para Internet</Text>
              <View style={styles.links}>
                  <Text style={{fontSize : 20}}>Links</Text>
                  <Text  style={[styles.link, {color : 'blue'}]} onPress={() => Linking.openURL('https://www.linkedin.com/in/viniciusmaiati/')}>Linkedin</Text>
                  <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/Maiav27')}>GitHub</Text>
              </View>
          </View>
        </View>

    )
}

export default Perfil

const styles = StyleSheet.create({
    container : {
      flex : 1,
      alignItems : "center",
      margin : 10
    },
    image :{
        width : 200,
        height : 200,
        borderRadius : 100
    },
    links : {
     marginTop : 5 

    }, 
    link : {
      marginLeft : 10,
      fontSize : 16, 
      fontStyle : 'italic'
    }
})