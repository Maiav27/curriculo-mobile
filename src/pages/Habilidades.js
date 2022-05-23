
 import {View, Text, FlatList} from  'react-native'
 
 import {Avatar,  Card, Title,  } from 'react-native-paper';




const  DATA = [{
     habilidade  : 'JavaScript',
     image : require('../../assets/js.png'),   
   },
  {
     habilidade : 'ReactJS',
     image : require('../../assets/reactjs.jpeg')
  }, 
  {
      habilidade : 'React Native',
      image : require('../../assets/reactnative.png')
  },
  {
      habilidade : 'Context',
      image : require('../../assets/context.png')
    } ,
    {
    habilidade : 'BootStrap',
     image : require('../../assets/bootstrap.png')
   },

   {
     habilidade : 'Css',
     image : require('../../assets/css.png')
   }

]


  


const Habilidades = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    
  const renderizaHabilidades = ({item}) => {
      return(
           <Card style={{margin : 5}}> 
         
          <Card.Content>
            <Card.Cover source={item.image} />
            <Title>{item.habilidade}</Title>
            
          </Card.Content>
       
             
        </Card>
      )
  }

  
  return(
      <View style={{flex : 1}}>   
     

          <FlatList  data={DATA}  renderItem={renderizaHabilidades} showsVerticalScrollIndicator={false}/>

          
      </View>
  )
}
export default Habilidades