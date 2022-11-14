import { ISecret } from '../../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAnimations from './useAnimations'
import { Container, Icon, Name, Next } from './style'
import { RFPercentage } from 'react-native-responsive-fontsize'
import limitText from '../../../../utils/limitText'
import { Dimensions } from 'react-native'

interface Iprops {
    secret: ISecret
    onVerify: (id: string) => void
    setOpenModalizeOptions: Dispatch<SetStateAction<string | null>>
}

const Secret: FC<Iprops> = ({ secret, onVerify, setOpenModalizeOptions }) => {
    const navigation = useNavigation()
    const { animationPressed, animationPressedIcon, animationPressedName, animationPressedNext, events } = useAnimations()
    
    return (
        <Container onLongPress={() => setOpenModalizeOptions(secret.id)} style={animationPressed} {...events(() => {
            if (secret.secure) {
                onVerify(secret.id)
            } else {
                navigation.navigate('Secret', { id: secret.id })
            }
        })}>
            <Icon size={RFPercentage(4)} name={!secret.hideIcon ? secret.icon : 'lock'} style={animationPressedIcon}/>
            <Name editable={false} numberOfLines={1} secureTextEntry={secret.hideName} style={animationPressedName}>
                {(!secret.hideName) ? limitText(secret.name, Dimensions.get('window').scale*8) : '                   '}
            </Name>
            <Next name="arrow-forward-ios" size={RFPercentage(4)} style={animationPressedNext}/>
        </Container>
    )
}

export default Secret