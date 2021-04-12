import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


const FooterContainer = styled.div `
    border-top: 0.6px solid rgb(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    padding: 2em 3em;
    padding-bottom: 0;
    width:100%;
`;

const TopContainer = styled.div `
    display: flex;
    margin-bottom: 1em;
    width: 100%;
`;

const ContentContainer = styled.div `
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
        margin-right: 3%;
    }
`;

const BottomContainer =styled.div `
    align-items: center;
    border-top: 0.6px solid rgb(0, 0, 0, 0.3);
    display: flex;
    height: 70px;
    justify-content: space-between;
    padding: 0 10px;

`;

const RightBottomContainer = styled.div `
    display: flex;
`;

const LeftBottomContainer = styled.div `
    display: flex;
`;

const Title = styled.div `
    color: #000;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 13px;
`;

const FLink = styled.div `
    color: #6F6F6F;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    
    &:not(:last-of-type){
        margin-bottom: 8px;
    }
`;

const PrivacyText = styled.h6 `
    align-items: center;
    color: #a3a3a3;
    display: flex;
    font-size: 11px;
    margin: 0;
    margin-left: 10px;
    margin-top: 5px;
`;

const SocialIcon = styled.div `
    color: #8A8A8A;
    cursor: pointer;
    font-size: 20px;
    transition: background-color, 200ms ease-in-out;

    &:hover{
        color: #777777;
    }

    &:not(:last-of-type){
        margin-right: 10px;
    }
`;

export function Footer(props){
    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Categories</Title>
                    <FLink>Car Repair</FLink>
                    <FLink>Carpentry</FLink>
                    <FLink>Landscaping</FLink>
                    <FLink>Cleaning</FLink>
                    <FLink>Home Improvement</FLink>
                    <FLink>Demolition</FLink>
                    <FLink>Management</FLink>
                    <FLink>Others</FLink>
                </ContentContainer>
                <ContentContainer>
                    <Title>Access</Title>
                    <FLink>Login</FLink>
                    <FLink>Join Us</FLink>
                    <FLink>Login as Specialist</FLink>
                    <FLink>Become a Specialist</FLink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo hideLogo color="#8A8A8A"  textSize = {25} />
                    <PrivacyText> &#169; All Rights Reserved. 2020</PrivacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </SocialIcon>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    )

}