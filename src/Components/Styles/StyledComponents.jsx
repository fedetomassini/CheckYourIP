import styled from 'styled-components';
import { WebColors } from './Colors';

export const WebLoaderGif = styled.img`
    display: flex;
    margin-top: 145px;
    margin-left: auto;
    margin-right: auto;
`

export const IPContainer = styled.div`
    width: fit-content;
    height: 225px;
    display: grid;
    place-items: center;
    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    font-family: 'Share Tech Mono', monospace !important;
    color: ${WebColors.DefaultTextColor};
    border: 5px double ${WebColors.IpContainerBorderColor};
    background-color: ${WebColors.IPContainerBackgroundColor};
`

export const UserIP = styled.span`
    padding: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: -75px;
    font-size: 26pt;
    border-radius: 5px;
    background-color: ${WebColors.UserIPBackgroundColor};
`

export const CustomTitle = styled.h1`
    font-size: 26pt;
    margin-top: -25px;
    color: ${WebColors.CustomTitleColor};
`

export const Advise = styled.p`
    text-align: center;
    color: ${WebColors.AdviseTextColor};
    font-family: 'Share Tech Mono', monospace !important;
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
    @media screen and (max-width: 540px){
        margin-left: 30px !important;
        margin-right: 30px !important;
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