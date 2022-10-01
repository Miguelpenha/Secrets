import useAnimations from './useAnimations'
import { useSecrets } from '../../../contexts/secretsContext'
import { useRoute, useNavigation } from '@react-navigation/native'
import { IParams } from '../types'
import { Container, ButtonDelete, IconButtonDelete } from './style'
import Animated from 'react-native-reanimated'

function ButtonDeleteAnimated() {
    const { animationButtonDelete, animationIconButtonDelete, events } = useAnimations()
    const { deleteSecret } = useSecrets()
    const { id } = useRoute().params as IParams
    const navigation = useNavigation()

    return (
        <Container style={animationButtonDelete}>
            <ButtonDelete
                {...events(async () => {
                    await deleteSecret(id)

                    navigation.navigate('Home')
                })}
            >
                <Animated.View style={animationIconButtonDelete}>
                    <IconButtonDelete name="delete" size={28}/>
                </Animated.View>
            </ButtonDelete>
        </Container>
    )
}

export default ButtonDeleteAnimated