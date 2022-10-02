import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, ButtonDelete, IconButtonDelete } from './style'
import Animated from 'react-native-reanimated'

interface Iprops {
    onPress: () => void
}

const ButtonDeleteAnimated: FC<Iprops> = ({ onPress }) => {
    const { animationButtonDelete, animationIconButtonDelete, events } = useAnimations()

    return (
        <Container style={animationButtonDelete}>
            <ButtonDelete {...events(onPress)}>
                <Animated.View style={animationIconButtonDelete}>
                    <IconButtonDelete name="delete" size={28}/>
                </Animated.View>
            </ButtonDelete>
        </Container>
    )
}

export default ButtonDeleteAnimated