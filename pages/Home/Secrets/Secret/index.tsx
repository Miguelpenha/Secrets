import { ISecret } from '../../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAnimations from './useAnimations'
import { Container, Icon, Name, Next } from './style'
import onPress from './onPress'
import { RFPercentage } from 'react-native-responsive-fontsize'
import nameIcon from './nameIcon'
import formatterName from './formatterName'

interface Iprops {
    secret: ISecret
    onVerify: (id: string) => void
    setOpenModalizeOptions: Dispatch<SetStateAction<string | null>>
}

const Secret: FC<Iprops> = ({ secret, onVerify, setOpenModalizeOptions }) => {
    const navigation = useNavigation()
    const { animationPressed, animationIconNextPressed, eventsContainer } = useAnimations()
    
    return (
        <Container
            style={animationPressed}
            onLongPress={() => setOpenModalizeOptions(secret.id)}
            {...eventsContainer(() => onPress(secret, onVerify, navigation))}
        >
            <Icon size={RFPercentage(4)} name={nameIcon(secret)}/>
            <Name editable={false} numberOfLines={1} secureTextEntry={secret.hideName}>{formatterName(secret)}</Name>
            <Next name="arrow-forward-ios" size={RFPercentage(4)} style={animationIconNextPressed}/>
        </Container>
    )
}

export default Secret