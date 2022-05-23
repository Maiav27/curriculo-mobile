import { View } from "react-native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
const AtividadesExtra = () => {
 
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return(
      <View> 
           
      <Card style={{margin : 10}}>
      <Card.Cover source={require('../../assets/voleiPraia.jpg')} />
      
      <Card.Content>
        <Title>Vôlei de praia</Title>
        <Paragraph>No meio da pandemia procurando algum esporte pra praticar, acabei  achando o vôlei ,que acabou se tornando meu esporte favorito, mas venho praticando mais o vôlei de praia</Paragraph>
      </Card.Content>
     
    </Card>

    <Card style={{margin : 10}}>
    <Card.Cover source={require('../../assets/musculacao.jpg')} />
    
      <Card.Content>
        <Title>Musculação</Title>
        <Paragraph>Desde os 16 anos venho praticando musculação, buscando um estilo de vida mais saúdavel.</Paragraph>
      </Card.Content>
     
    </Card>
  
      </View>
    )
}

export default AtividadesExtra