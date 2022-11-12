import { TouchableOpacityProps } from 'react-native'
import { FC } from 'react'
import useAnimations from './useAnimations'
import { Container, Text } from './style'

interface Iprops extends TouchableOpacityProps {
    confirm?: boolean
    onPress: () => void
}

const ButtonAnimated: FC<Iprops> = ({ confirm, onPress, children }) => {
    const { animationContainer, animationText, events } = useAnimations()

    return (
        <Container confirm={confirm} style={animationContainer} {...events(onPress)}>
            <Text confirm={confirm} style={animationText}>{children}</Text>
        </Container>
    )
}

export default ButtonAnimated