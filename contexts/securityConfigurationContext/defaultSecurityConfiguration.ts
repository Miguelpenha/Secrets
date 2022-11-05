import { ISecurity } from '../../types'

const defaultSecurityConfiguration: ISecurity = {
    verifyPasswordWhenDeleteData: false,
    verifyPasswordWhenEditSecret: false,
    verifyPasswordWhenShareSecret: false,
    verifyPasswordWhenDeleteSecret: true,
    verifyPasswordWhenExportSecrets: true,
    verifyPasswordWhenImportSecrets: false,
    verifyPasswordWhenChangePassword: true,
    verifyPasswordWhenSecurityConfiguration: true
}

export default defaultSecurityConfiguration