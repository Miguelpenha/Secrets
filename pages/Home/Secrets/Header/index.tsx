import { Dispatch, SetStateAction, MutableRefObject, FC, memo } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useNavigation } from '@react-navigation/native'
import useShowEmoji from '../../../../contexts/emojiContext'
import useSecrets from '../../../../contexts/secretsContext'
import { useTheme } from 'styled-components'
import { Container, ContainerSettings, Settings, Title, EmojiTitle, Actions, ActionsRow1, InputFind, ActionsRow2 } from './style'
import ButtonCreateAnimated from './ButtonCreateAnimated'
import SelectTypeAnimated from './SelectTypeAnimated'

interface Iprops {
    find: string
    type: string
    openModalizeSelectType: boolean
    setFind: Dispatch<SetStateAction<string>>
    modalizeSelectType: MutableRefObject<IHandles>
}

const Header: FC<Iprops> = ({ modalizeSelectType, openModalizeSelectType, find, setFind, type }) => {
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
                <ActionsRow1>
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
                </ActionsRow1>
                <ActionsRow2>
                    {secrets.length ? (
                        <SelectTypeAnimated
                            type={type}
                            openModalizeSelectType={openModalizeSelectType}
                            onPress={() => modalizeSelectType.current.open()}
                        />
                    ) : null}
                </ActionsRow2>
            </Actions>
        </Container>
    )
}

export default memo(Header)