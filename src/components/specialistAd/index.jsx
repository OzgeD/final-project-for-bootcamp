import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";

import FarmingImg from "../../images/farming.png";


const SpecialistAdContainer = styled.div`
    align-items: center;
    background-color: #264653;
    display: flex;
    height: 500px;
    justify-content: center;
    width: 100%; 
`;

const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const SloganContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 5em;
`;

const Slogan = styled.h2`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0;
    text-align: start;
`;

const StandoutImage = styled.div`
    height: 29em;
    width: 35em;

    img {
        width: 100%;
        height: 100%;
    }

`;

export function SpecialistAd(props){
    return (
        <SpecialistAdContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo logoSize={40} textSize={35} />
                    <Marginer direction="vertical" margin="1em" />
                    <SloganContainer>
                        <Slogan>You're a Specialist, and you</Slogan>
                        <Slogan>have an outstanding</Slogan>
                        <Slogan>Service to offer?</Slogan>
                    </SloganContainer>
                    <Marginer direction="vertical" margin="0.8em" />
                    <Button size={15} >Join as Specialist</Button>
                </SloganContainer>
                <StandoutImage>
                    <img src={FarmingImg} alt="join-as-specialist" />
                </StandoutImage>
            </ContentContainer>
        </SpecialistAdContainer>

    )

}