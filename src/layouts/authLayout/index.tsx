import React from 'react'
import * as S from './styles'
import { PropsAuthLayout } from './types'

const AuthLayout = ({ children }: PropsAuthLayout) => {
    return (
        <S.Container>
            {/*<WarningVersionBeta />*/}
            <S.Body>{children}</S.Body>
        </S.Container>
    )
}
export default AuthLayout
