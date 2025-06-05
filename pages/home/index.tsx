import * as S from '../../styles/Home'
import useController from '../../pagesControllers/home/controller'
import { faCalendarRange, faRobot, faFileCheck, faLightbulb } from '@fortawesome/pro-solid-svg-icons'

import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function Home() {
    return (
        <S.Container>
            <S.Header>
                <S.Logo>acelera.ai</S.Logo>
                <S.Nav>
                    <a href="#main">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#services">Serviços</a>
                    <a href="#" className="btn">
                        Contato
                    </a>
                </S.Nav>
            </S.Header>
            <S.Main id="main">
                <S.Info>
                    <S.Title>
                        Serviços de <br />
                        Agentes <br /> Inteligentes
                    </S.Title>
                    <S.Subtitle>
                        Automatize seu negócio com <br />
                        soluções inteligentes de IA <br />e acelere seus resultados!
                    </S.Subtitle>
                    <S.Button href="#">Começar agora</S.Button>
                </S.Info>
                <S.RobotBox>
                    <img src="/robo-ai.png" alt="Mascote acelera.ai" className="robot" />
                </S.RobotBox>
            </S.Main>
            <S.ServicesSection id="services">
                <S.SectionTitle>Nossos Serviços</S.SectionTitle>
                <S.ServicesGrid>
                    <S.ServiceCard>
                        <S.ServiceIcon>
                            {' '}
                            <S.Icon icon={faRobot} iconSize="2rem" />
                        </S.ServiceIcon>
                        <S.ServiceTitle>Suporte ao Cliente</S.ServiceTitle>
                        <S.ServiceDesc>Agentes de IA para atendimento eficiente e rápido ao cliente.</S.ServiceDesc>
                    </S.ServiceCard>
                    <S.ServiceCard>
                        <S.ServiceIcon>
                            {' '}
                            <S.Icon icon={faCalendarRange} iconSize="2rem" />
                        </S.ServiceIcon>
                        <S.ServiceTitle>Agendamento Automático</S.ServiceTitle>
                        <S.ServiceDesc>Assistentes inteligentes para gerenciar agendas e compromissos.</S.ServiceDesc>
                    </S.ServiceCard>
                    <S.ServiceCard>
                        <S.ServiceIcon>
                            <S.Icon icon={faWhatsapp} iconSize="2rem" />
                        </S.ServiceIcon>
                        <S.ServiceTitle>Atendimento para WhatsApp</S.ServiceTitle>
                        <S.ServiceDesc> O mais completo atendimento com IA para WhatsApp.</S.ServiceDesc>
                    </S.ServiceCard>
                    <S.ServiceCard>
                        <S.ServiceIcon>
                            <S.Icon icon={faInstagram} iconSize="2rem" />
                        </S.ServiceIcon>
                        <S.ServiceTitle>Marketing Digital</S.ServiceTitle>
                        <S.ServiceDesc>Social media e marketing para aumentar a visibilidade e o impacto.</S.ServiceDesc>
                    </S.ServiceCard>
                    <S.ServiceCard>
                        <S.ServiceIcon>
                            <S.Icon icon={faFileCheck} iconSize="2rem" />
                        </S.ServiceIcon>
                        <S.ServiceTitle>Relaotrio de Negocios e Emails</S.ServiceTitle>
                        <S.ServiceDesc>Acompanhe o desempenho do seu negócio em tempo real.</S.ServiceDesc>
                    </S.ServiceCard>
                    <S.ServiceCard>
                        <S.ServiceIcon>
                            <S.Icon icon={faLightbulb} iconSize="2rem" />
                        </S.ServiceIcon>
                        <S.ServiceTitle>Automações Personalizadas</S.ServiceTitle>
                        <S.ServiceDesc>Crie automações inteligentes para melhorar a eficiência do seu negócio.</S.ServiceDesc>
                    </S.ServiceCard>
                </S.ServicesGrid>
            </S.ServicesSection>
        </S.Container>
    )
}
Home.getLayout = function getLayout(page: any) {
    return <>{page}</>
}
