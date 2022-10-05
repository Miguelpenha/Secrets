import { ISecurity } from '../../types'

const defaultSecurityConfiguration: ISecurity = {
    verifyPasswordWhenDeleteData: false,
    verifyPasswordWhenEditSecret: false,
    verifyPasswordWhenDeleteSecret: true,
    verifyPasswordWhenExportSecrets: true,
    verifyPasswordWhenImportSecrets: true,
    verifyPasswordWhenChangePassword: true,
    verifyPasswordWhenSecurityConfiguration: true
}

export default defaultSecurityConfiguration