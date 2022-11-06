import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Button, IconButton } from './style'
import Animated from 'react-native-reanimated'

interface Iprops {
    onPress: () => void
}

const ButtonShareAnimated: FC<Iprops> = ({ onPress }) => {
    const { animationButtonDelete, animationIconButtonDelete, events } = useAnimations()

    return (
        <Container style={animationButtonDelete}>
            <Button {...events(onPress)}>
                <Animated.View style={animationIconButtonDelete}>
                    <IconButton name="share" size={28}/>
                </Animated.View>
            </Button>
        </Container>
    )
}

export default ButtonShareAnimated