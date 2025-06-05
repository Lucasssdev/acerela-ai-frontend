import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { PropsMainLayout } from './types'
import useController from './controller'

const MainLayout = ({ children }: PropsMainLayout) => {
    const controller = useController()

    return (
        <S.Screen>
            <S.Container id="main-layout-container" hiddenMenu={controller.hiddenLateralMain}>
                <S.LateralMenu hiddenMenu={controller.hiddenLateralMain}></S.LateralMenu>
                <S.Body hiddenMenu={controller.hiddenLateralMain}>
                    <S.Page>
                        <article>{children}</article>
                    </S.Page>
                </S.Body>
            </S.Container>
        </S.Screen>
    )
}
export default MainLayout
