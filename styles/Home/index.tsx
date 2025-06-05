import Image from 'next/image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
    background: #f7faff;
    min-height: 100vh;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
`

export const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 1.5rem 0;
    transition: box-shadow 0.2s;
    @media screen and (max-width: 500px) {
        padding: 1rem 0 0.5rem 0;
    }
`
export const BlueSection = styled.div`
    width: 100%;
    background: #e7f0ff;
    min-height: 120px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 2rem;
    color: #2563eb;
    margin-left: 3rem;
    letter-spacing: -2px;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        margin-left: 1rem;
        font-size: 1.3rem;
    }
`

export const Nav = styled.nav`
    margin-right: 3rem;
    a {
        margin-left: 2rem;
        color: #0f172a;
        font-weight: 500;
        text-decoration: none;
        font-size: 1.05rem;
        &.btn {
            background: #2563eb;
            color: #fff;
            padding: 0.5rem 1.2rem;
            border-radius: 8px;
            font-weight: 700;
            margin-left: 2rem;
            transition: background 0.2s;
            &:hover {
                color: #fff;
                background: #1e50b5;
            }
        }
        &:hover {
            color: #2563eb;
        }
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const Main = styled.main`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 7rem 2rem 2rem 7rem; // aumente conforme altura real do header
    //flex-wrap: wrap;
    background: #e7f0ff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media screen and (max-width: 900px) {
        padding: 4rem 2rem 2rem 2rem;
    }
`
export const Icon = styled(FontAwesomeIcon)<{ color?: string; iconSize?: string }>`
    color: ${({ color }) => color || 'var(--text-primary)'};
    font-size: ${({ iconSize }) => iconSize || '1rem'};
`
export const Info = styled.div`
    //  flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 1rem;
    width: 100%;
`
export const RobotBox = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    .robot {
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }
    @media screen and (max-width: 900px) {
        .robot {
            width: 150px;
            height: 150px;
        }
    }
    @media screen and (max-width: 500px) {
        .robot {
            width: 150px;
            height: 150px;
        }
    }
    // background-color: red;
`

export const Title = styled.h1`
    font-size: 2.8rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 1rem;
    line-height: 110%;
    @media screen and (max-width: 900px) {
        font-size: 1.8rem;
    }
`

export const Subtitle = styled.p`
    color: #334155;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-weight: 500;
    @media screen and (max-width: 900px) {
        font-size: 1rem;
    }
`

export const Button = styled.a`
    background: #2563eb;
    color: #fff;
    padding: 0.8rem 2.2rem;
    font-size: 1.15rem;
    border-radius: 12px;
    font-weight: 600;
    box-shadow: 0 4px 16px #2563eb22;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
    margin-top: 1rem;
    white-space: nowrap;
    &:hover {
        background: #1e50b5;
    }
`

export const ServicesSection = styled.section`
    margin: 2.5rem auto;
    padding: 1.5rem 0 2rem 0;
    max-width: 1100px;
`

export const SectionTitle = styled.h2`
    font-size: 2rem;
    color: #0f172a;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
`

export const ServicesGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`

export const ServiceCard = styled.div`
    background: #f1f5f9;
    border-radius: 18px;
    padding: 2rem 1.5rem;
    width: 300px;
    box-shadow: 0 4px 16px #2563eb11;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 220px;
    transition: transform 0.15s;
    &:hover {
        transform: translateY(-7px) scale(1.04);
        box-shadow: 0 6px 24px #2563eb26;
    }
`

export const ServiceIcon = styled.div`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2563eb;
`

export const ServiceTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #0f172a;
`

export const ServiceDesc = styled.p`
    font-size: 1rem;
    color: #334155;
`
