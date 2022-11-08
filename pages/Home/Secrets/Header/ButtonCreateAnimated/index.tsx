import useAnimations from './useAnimations'
import { useNavigation } from '@react-navigation/native'
import { Container, Icon } from './style'

function ButtonCreateAnimated() {
    const { animationContainer, animationIcon, events } = useAnimations()
    const navigation = useNavigation()

    return (
        <Container style={animationContainer} {...events(() => navigation.navigate('CreateSecret'))}>
            <Icon name="add" size={40} style={animationIcon}/>
        </Container>
    )
}

export default ButtonCreateAnimated