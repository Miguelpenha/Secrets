import { Dispatch, SetStateAction, MutableRefObject, FC, memo } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useNavigation } from '@react-navigation/native'
import useShowEmoji from '../../../../contexts/emojiContext'
import useSecrets from '../../../../contexts/secretsContext'
import { useTheme } from 'styled-components'
import { Container, ContainerSettings, Settings, Title, EmojiTitle, Actions, ActionsRow, InputFind } from './style'
import ButtonCreateAnimated from './ButtonCreateAnimated'
import SelectTypeAnimated from './SelectTypeAnimated'

interface Iprops {
    find: string
    type: string
    openModalizeSelectType: boolean
    setType: Dispatch<SetStateAction<string>>
    setFind: Dispatch<SetStateAction<string>>
    modalizeSelectType: MutableRefObject<IHandles>
}

const Header: FC<Iprops> = ({ modalizeSelectType, openModalizeSelectType, find, setFind, type, setType }) => {
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
                <ActionsRow>
                    {secrets.length ? (
                        <InputFind
                            value={find}
                            onChangeText={setFind}
                            placeholder="Pesquisar..."
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                        />
                    ) : null}
                    <ButtonCreateAnimated/>
                </ActionsRow>
                {secrets.length ? (
                    <SelectTypeAnimated
                        type={type}
                        setType={setType}
                        onLongPress={() => setType('')}
                        openModalizeSelectType={openModalizeSelectType}
                        onPress={() => modalizeSelectType.current.open()}
                    />
                ) : null}
            </Actions>
        </Container>
    )
}

export default memo(Header)