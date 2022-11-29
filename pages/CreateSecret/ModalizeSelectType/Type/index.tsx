import { MutableRefObject, Dispatch, SetStateAction, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useAnimations from './useAnimations'
import { Container, Text } from './style'
import onLongPress from './onLongPress'

interface Iprops {
    value?: string
    modalize: MutableRefObject<IHandles>
    setType: Dispatch<SetStateAction<string>>
}

const Type: FC<Iprops> = ({ children, value, setType, modalize }) => {
    const { animationContainer, animationText, events } = useAnimations()

    function onPress() {
        setType((typeof value === 'string' && value.length === 0) ? value : String(children))
            
        modalize.current.close()
    }

    return (
        <Container style={animationContainer} {...events(onPress, () => onLongPress(String(children)))}>
            <Text style={animationText}>{children}</Text>
        </Container>
    )
}

export default Type