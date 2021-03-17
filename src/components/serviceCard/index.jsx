import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div `
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    margin: 0.5em;
    margin-bottom: 1.3em;
    min-height: 250px;
    overflow: hidden;
    width: 300px;
`;

const TopContainer = styled.div`
    width: 100%;
`;

const ServiceThumbnail = styled.div`
    height: 11em;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
    }
`;

const ContentContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 15px 14px;
    width: 100%;
`;

const BottomContainer = styled.div`
    align-items: center;
    border-top: 1px solid rgba(15, 15, 15, 0.19); 
    display: flex;
    height: 32px;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
`;

const Title = styled.h2`
    color: #000;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    text-align: start;
`;

const SpecialistName = styled.h4`
    color: rgba(151, 151, 151, 1);
    font-size: 12px;
    font-weight: 400;
    margin: 0;
`;

const RatingContainer = styled.div`
    color: #ebe204;
    display: flex;
`;

const PriceContainer = styled.div`
    align-items: center;
    display: flex;
`;

const PriceText = styled.div`
    color: #2ba679;
    font-weight: 700;
    margin-left: 3px;
`;

const StartingAtText = styled.h6`
    color: rgb(161, 161, 161);
    font-weight: 400;
    margin: 0;
`;

export function ServiceCard(props) {
    const { thumbnailUrl, specialist, id, title, rate, rating } = props;

    return (
        <CardContainer>
            <TopContainer>
                <ServiceThumbnail>
                    <img src={thumbnailUrl} alt={title} />
                </ServiceThumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>{ title }</Title>
                <Marginer direction="vertical" margin={10}/>
                <SpecialistName>{ specialist.fullName }</SpecialistName>
            </ContentContainer>
            <BottomContainer>
                <RatingContainer>
                    <FontAwesomeIcon icon={faStar} size="sm" />
                    {rating}
                </RatingContainer>
                <PriceContainer>
                    <StartingAtText>STARTING AT</StartingAtText>
                    <PriceText>${rate}/hr </PriceText>
                </PriceContainer>
            </BottomContainer>
        </CardContainer>
    )
}