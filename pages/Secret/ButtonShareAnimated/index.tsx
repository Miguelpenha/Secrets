import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Button, IconButton } from './style'
import Animated from 'react-native-reanimated'

interface Iprops {
    onPress: () => void
    visibility: boolean
}

const ButtonShareAnimated: FC<Iprops> = ({ visibility, onPress }) => {
    const { animationButtonDelete, animationIconButtonDelete, events } = useAnimations()

    return (
        <Container bottom={visibility} style={animationButtonDelete}>
            <Button {...events(onPress)}>
                <Animated.View style={animationIconButtonDelete}>
                    <IconButton name="share" size={30}/>
                </Animated.View>
            </Button>
        </Container>
    )
}

export default ButtonShareAnimated