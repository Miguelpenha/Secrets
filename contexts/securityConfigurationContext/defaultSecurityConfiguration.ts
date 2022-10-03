import { ISecurity } from '../../types'

const defaultSecurityConfiguration: ISecurity = {
    verifyPasswordWhenDeleteSecret: true,
    verifyPasswordWhenChangePassword: true,
    verifyPasswordWhenSecurityConfiguration: true
}

export default defaultSecurityConfiguration