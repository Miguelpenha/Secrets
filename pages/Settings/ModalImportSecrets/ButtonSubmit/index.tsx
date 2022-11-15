import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Text } from './style'

interface Iprops {
    onPress: () => void
}

const ButtonSubmit: FC<Iprops> = ({ onPress }) => {
    const { animationContainer, animationText, events } = useAnimations()

    return (
        <Container style={animationContainer} {...events(onPress)}>
            <Text style={animationText}>Importar</Text>
        </Container>
    )
}

export default ButtonSubmit