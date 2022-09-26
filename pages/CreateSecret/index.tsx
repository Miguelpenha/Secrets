import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Field, Label, Input, ButtonSubmit, TextButtonSubmit } from './style'
import useSecrets from '../../contexts/secretsContext'
import uuid from 'react-native-uuid'
import Toast from 'react-native-toast-message'

function CreateSecret() {
    const navigation = useNavigation()
    const theme = useTheme()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const { createSecret } = useSecrets()
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerPd>
                <HeaderBack onClick={() => navigation.goBack()} title="Criar segredo"/>
                <KeyboardAvoidingView behavior="height" enabled>
                    <Field>
                        <Label>Nome do segredo</Label>
                        <Input
                            value={name}
                            onChangeText={setName}
                            placeholder="Nome..."
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                        />
                    </Field>
                    <Field>
                        <Label>Tipo do segredo</Label>
                        <Input
                            value={type}
                            onChangeText={setType}
                            placeholder="Tipo..."
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                        />
                    </Field>
                    <Field>
                        <Label>Valor do segredo</Label>
                        <Input
                            multiline
                            value={value}
                            placeholder="Valor..."
                            onChangeText={setValue}
                            selectionColor={theme.primary}
                            placeholderTextColor={theme.primary}
                        />
                    </Field>
                </KeyboardAvoidingView>
                <ButtonSubmit
                    onPress={async () => {
                        if (name && type && value) {
                            await createSecret({
                                name,
                                type,
                                value,
                                icon: 'vpn-key',
                                id: String(uuid.v4())
                            })

                            navigation.navigate('Home')

                            Toast.show({
                                type: 'success',
                                text1: 'Segredo criado com sucesso',
                                onPress() {
                                    Toast.hide()
                                }
                            })
                        } else {
                            Toast.show({
                                type: 'error',
                                text1: 'Campos não preenchidos',
                                onPress() {
                                    Toast.hide()
                                }
                            })
                        }
                    }}
                >
                    <TextButtonSubmit>Criar</TextButtonSubmit>
                </ButtonSubmit>
            </ContainerPd>
        </TouchableWithoutFeedback>
    )
}

export default CreateSecret