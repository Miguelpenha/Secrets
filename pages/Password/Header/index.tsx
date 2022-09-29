import { useNavigation } from '@react-navigation/native'
import { Container, ContainerSettings, Settings } from './style'
import { memo } from 'react'

function Header() {
    const navigation = useNavigation()

    return (
        <Container>
            <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                <Settings name="settings" size={40}/>
            </ContainerSettings>
        </Container>
    )
}

export default memo(Header)