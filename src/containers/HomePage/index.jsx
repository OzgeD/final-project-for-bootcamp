import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { SpecialistAd } from "../../components/specialistAd";
import { Services } from "./services";
import { TopSection } from "./topSection";


const ContentContainer = styled.div `
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    max-width: ${deviceSize.laptop}px;
    padding: 1em;
    width: 100%;
`;

export function HomePage(props) {
    return (
        <PageContainer>
            <TopSection>
                <Navbar />
            </TopSection>
            <InnerPageContainer>
                <Marginer direction="vertical" margin="3em" />
                <ContentContainer>
                    <Services />
                </ContentContainer>
                <Marginer direction="vertical" margin="5em" />
                <SpecialistAd />
            </InnerPageContainer>
        </PageContainer>
    );
}