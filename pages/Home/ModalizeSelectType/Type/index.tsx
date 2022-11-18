import { MutableRefObject, Dispatch, SetStateAction, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import useAnimations from './useAnimations'
import { Container, Text } from './style'
import * as Clipboard from 'expo-clipboard'
import Toast from 'react-native-toast-message'

interface Iprops {
    value?: string
    modalize: MutableRefObject<IHandles>
    setType: Dispatch<SetStateAction<string>>
}

const Type: FC<Iprops> = ({ children, value, setType, modalize }) => {
    const { animationContainer, animationText, events } = useAnimations()

    return (
        <Container onLongPress={() => {
            Clipboard.setString(String(children))

            Toast.show({
                text1: 'Tipo copiado!',
                type: 'success',
                onPress() {
                    Toast.hide()
                }
            })
        }} style={animationContainer} {...events(() => {
            setType((typeof value === 'string' && value.length === 0) ? value : String(children))
            
            modalize.current.close()
        })}>
            <Text style={animationText}>{children}</Text>
        </Container>
    )
}

export default Type