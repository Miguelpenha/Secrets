import useAnimations from './useAnimations'
import { useNavigation } from '@react-navigation/native'
import { Container, ButtonCreate, IconButtonCreate } from './style'
import Animated from 'react-native-reanimated'

function ButtonCreateAnimated() {
    const { animationButtonCreate, animationIconButtonCreate, events } = useAnimations()
    const navigation = useNavigation()

    return (
        <Container style={animationButtonCreate}>
            <ButtonCreate {...events(() => navigation.navigate('CreateSecret'))}>
                <Animated.View style={animationIconButtonCreate}>
                    <IconButtonCreate name="add" size={40}/>
                </Animated.View>
            </ButtonCreate>
        </Container>
    )
}

export default ButtonCreateAnimated