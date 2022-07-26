import styled from "styled-components";

export const ChartContainer = styled.div`
  color: #fff;
  background: "#fff";

  @media screen and (max-width: 768) {
    padding: 100px 0;
  }
`;

export const ChartWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;
