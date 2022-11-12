import { ISecurity } from '../../../types'
import { Dispatch, SetStateAction, FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import useSecurityConfiguration from '../../../contexts/securityConfigurationContext'
import { Container, Title, Buttons, ButtonCancel, TextButtonCancel, ButtonSave, TextButtonSave } from './style'
import Toast from 'react-native-toast-message'
import { blue, magenta } from '../../../utils/colorsLogs'

interface Iprops {
    securityConfiguration: ISecurity
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const ModalSave: FC<Iprops> = ({ securityConfiguration, setOpenModal }) => {
    const navigation = useNavigation()
    const { setSecurityConfiguration } = useSecurityConfiguration()

    return (
        <Container>
            <Title>Deseja salvar essas alterações?</Title>
            <Buttons>
                <ButtonCancel activeOpacity={0.5} onPress={() => setOpenModal(false)}>
                    <TextButtonCancel>Cancelar</TextButtonCancel>
                </ButtonCancel>
                <ButtonSave activeOpacity={0.5} onPress={async () => {
                    setOpenModal(false)

                    setSecurityConfiguration(securityConfiguration)

                    console.log(blue(`>> Security configuration changed`))
                    console.log(magenta(`   >> verifyPasswordWhenStatistics ${blue(String(securityConfiguration.verifyPasswordWhenStatistics))}`))
                    console.log(magenta(`   >> verifyPasswordWhenDeleteData ${blue(String(securityConfiguration.verifyPasswordWhenDeleteData))}`))
                    console.log(magenta(`   >> verifyPasswordWhenEditSecret ${blue(String(securityConfiguration.verifyPasswordWhenEditSecret))}`))
                    console.log(magenta(`   >> verifyPasswordWhenShareSecret ${blue(String(securityConfiguration.verifyPasswordWhenShareSecret))}`))
                    console.log(magenta(`   >> verifyPasswordWhenDeleteSecret ${blue(String(securityConfiguration.verifyPasswordWhenDeleteSecret))}`))
                    console.log(magenta(`   >> verifyPasswordWhenExportSecrets ${blue(String(securityConfiguration.verifyPasswordWhenExportSecrets))}`))
                    console.log(magenta(`   >> verifyPasswordWhenImportSecrets ${blue(String(securityConfiguration.verifyPasswordWhenImportSecrets))}`))
                    console.log(magenta(`   >> verifyPasswordWhenChangePassword ${blue(String(securityConfiguration.verifyPasswordWhenChangePassword))}`))
                    console.log(magenta(`   >> verifyPasswordWhenSecurityConfiguration ${blue(String(securityConfiguration.verifyPasswordWhenSecurityConfiguration))}`))

                    navigation.goBack()

                    Toast.show({
                        text1: 'Alterações salvas com sucesso!',
                        type: 'success',
                        onPress() {
                            Toast.hide()
                        }
                    })
                }}>
                    <TextButtonSave>Salvar</TextButtonSave>
                </ButtonSave>
            </Buttons>
        </Container>
    )
}

export default memo(ModalSave)