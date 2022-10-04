import { Dispatch, SetStateAction, FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import useShowEmoji from '../../../../contexts/emojiContext'
import { useTheme } from 'styled-components'
import { Container, ContainerSettings, Settings, Title, EmojiTitle, Actions, InputFind } from './style'
import ButtonCreateAnimated from './ButtonCreateAnimated'
import useSecrets from '../../../../contexts/secretsContext'

interface Iprops {
    find: string
    setFind: Dispatch<SetStateAction<string>>
}

const Header: FC<Iprops> = ({ find, setFind }) => {
    const navigation = useNavigation()
    const { showEmoji } = useShowEmoji()
    const { secrets } = useSecrets()
    const theme = useTheme()

    return (
        <Container>
            <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                <Settings name="settings" size={40}/>
            </ContainerSettings>
            <Title>Segredos {showEmoji && <EmojiTitle>&#x1F92B;</EmojiTitle>}</Title>
            <Actions>
                {secrets.length ? (
                    <InputFind
                        value={find}
                        placeholder="Pesquisar..."
                        onChangeText={setFind}
                        selectionColor={theme.primary}
                        placeholderTextColor={theme.primary}
                    />
                ) : null}
                <ButtonCreateAnimated/>
            </Actions>
        </Container>
    )
}

export default memo(Header)