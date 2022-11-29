import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Icon } from './style'

interface Iprops {
    onPress: () => void
}

const ButtonCreateAnimated: FC<Iprops> = ({ onPress }) => {
    const { animationContainer, animationIcon, events } = useAnimations()

    return (
        <Container style={animationContainer} {...events(onPress)}>
            <Icon name="add" size={40} style={animationIcon}/>
        </Container>
    )
}

export default ButtonCreateAnimated