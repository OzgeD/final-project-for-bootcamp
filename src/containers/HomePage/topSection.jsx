import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../../components/brandLogo";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import TheBestSpecialistsImg from "../../images/Work only with the best.png";


const TopSectionContainer = styled.div `
    background: url(${TopSectionBackgroundImg});
    background-position: 0px -150px;
    background-size: cover;
    height: 800px;
    width: 100%;
`;

const BackgroundFilter = styled.div `
    background-color: rgba(38, 70, 83, 0.9);
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

const TopSectionInnerContainer = styled.div `
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    weight: 100%;
`;

const StandoutImage = styled.div `
    height: 34em;
    width: 44em;

    img{
        height: 100%;
        width: 100%;
    }
`;

/* const Title = styled.h2 `
    color: #fff;
    font-size: 24px;
    line-height: 1.7;
    margin: 0;
`; */

const LogoContainer = styled.div `
    display: flex;
    flex-direction: column;

`;

export function TopSection(props){
    return (
        <TopSectionContainer>
            <BackgroundFilter>
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <BrandLogo />
                    </LogoContainer>
                    <StandoutImage>
                    <img src={TheBestSpecialistsImg} alt="" />
                    </StandoutImage>
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>

    );
}

