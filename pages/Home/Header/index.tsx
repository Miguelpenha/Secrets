import { useNavigation } from '@react-navigation/native'
import useShowEmoji from '../../../contexts/emojiContext'
import { Container, ContainerSettings, Settings, Title, EmojiTitle } from './style'
import { memo } from 'react'

function Header() {
    const navigation = useNavigation()
    const { showEmoji } = useShowEmoji()

    return (
        <Container>
            <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                <Settings name="settings" size={40}/>
            </ContainerSettings>
            <Title>Segredos {showEmoji && <EmojiTitle>&#x1F92B;</EmojiTitle>}</Title>
        </Container>
    )
}

export default memo(Header)