import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100%;
  padding: 0;
  width: 100%;

`;

export function PageContainer(props) {
  return <PageWrapper>{props.children}</PageWrapper>;
}

export const InnerPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-height: 70vh;
  padding: 1em;
  width: 100%;
`;