import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Text } from './style'

interface Iprops {
    disabled: boolean
    onPress: () => void
}

const ButtonSubmit: FC<Iprops> = ({ disabled, onPress }) => {
    const { animationContainer, animationText, events } = useAnimations()

    return (
        <Container style={animationContainer} {...events(disabled, onPress)}>
            <Text disabled={disabled} style={animationText}>Criar</Text>
        </Container>
    )
}

export default ButtonSubmit