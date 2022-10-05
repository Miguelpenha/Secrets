import { ISecurity } from '../../types'

const defaultSecurityConfiguration: ISecurity = {
    verifyPasswordWhenEditSecret: false,
    verifyPasswordWhenDeleteSecret: true,
    verifyPasswordWhenChangePassword: true,
    verifyPasswordWhenSecurityConfiguration: true
}

export default defaultSecurityConfiguration