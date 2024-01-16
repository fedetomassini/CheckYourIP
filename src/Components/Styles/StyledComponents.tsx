import styled from 'styled-components';
import { WebColors } from './Colors';

export const WebLoaderGif = styled.img`
    display: flex;
    margin-top: 145px;
    margin-left: auto;
    margin-right: auto;
`

export const UserDataContainer = styled.div`
    width: fit-content;
    display: grid;
    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    font-family: 'Share Tech Mono', monospace !important;
    color: ${WebColors.DefaultTextColor};
    border: 5px dashed ${WebColors.IpContainerBorderColor};
    background-color: ${WebColors.IPContainerBackgroundColor};
    &:hover{
        border-color: ${WebColors.HoverTextColor};
    }
`

export const UserData = styled.span`
    font-size: 14pt;
    margin-left: 15px;
    margin-bottom: 15px;
    color: ${WebColors.CustomTitleColor}

`

export const Title = styled.h1`
    font-size: 22pt;
    display: inline-flex;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
    gap: 10px;
    color: ${WebColors.CustomTitleColor};
    @media (max-width: 420px) {
        gap: 1px;
    }
`

export const Advise = styled.p`
    text-align: center;
    color: ${WebColors.AdviseTextColor};
    font-family: 'Share Tech Mono', monospace !important;
    margin-top: 200px;
    margin-left: 50px;
    margin-right: 50px;
    @media screen and (max-width: 540px){
        margin-left: 20px !important;
        margin-right: 20px !important;
    }
`

export const GitHubLink = styled.a`
    cursor: pointer;
    color: ${WebColors.CopyrightMessageColor};
    text-decoration-style: dashed;
    text-decoration-line: underline;
    text-underline-offset: 4px;
    &:hover{
        transition: all ease-in-out 175ms;
        text-underline-offset: 8px;
        color: ${WebColors.HoverTextColor};
    }
`