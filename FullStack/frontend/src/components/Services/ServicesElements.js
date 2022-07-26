import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 939px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1002px) {
    height: 1700px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 1002px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.button`
  background: #e6e6e6;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  border-radius: 10px;
  max-height: 600px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 1500px) {
    max-height: 340px;
  }

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 500px;
  max-height: 340px;
  width: 300px;
  margin-bottom: 10px;
  @media screen and (max-width: 1500px) {
    height: 340px;
    max-height: 200px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and(max-width:480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const Servicesp = styled.p`
  font-size: 1rem;
  text-align: left;
`;
