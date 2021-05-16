import styled from "styled-components";
import { CardStateType } from "../../App";

export const StyleCard = styled.div`
  position: relative;
  margin: 0.75rem 0;
  padding: 0.5rem;
  width: 24rem;
  height: 10rem;
`;

export const FrontCard = styled.div<{
  wordState: CardStateType;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 10.5rem;
  border: 1px solid #333333;
  border-radius: 1rem;
  background: #ffffff;
  cursor: pointer;
  transform: perspective(500px)
    rotateY(${({ wordState }) => (wordState === "front" ? "0deg" : "180deg")});
  transition: transform 150ms linear, opacity 300ms;
  opacity: ${({ wordState }) => (wordState === "front" ? 1 : 0)};
`;

export const BackCard = styled.div<{
  wordState: CardStateType;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  height: 10.5rem;
  border: 1px solid #333333;
  border-radius: 1rem;
  cursor: pointer;
  transform: perspective(500px)
    rotateY(${({ wordState }) => (wordState !== "front" ? "0deg" : "-180deg")});
  transition: transform 150ms linear, opacity 300ms;
  opacity: ${({ wordState }) => (wordState !== "front" ? 1 : 0)};
`;

export const Left = styled.div<{ wordState: CardStateType }>`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
  background: linear-gradient(
    ${({ wordState }) =>
      wordState === "right"
        ? "to right, #b8ff89, #b8ff89"
        : "to right, #ff8989, #ff8989"}
  );
  transition: all 200ms;
  z-index: -1;
`;

export const Right = styled.div<{ wordState: CardStateType }>`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  border-radius: 0 1rem 1rem 0;
  background: linear-gradient(
    ${({ wordState }) =>
      wordState !== "left"
        ? "to left, #b8ff89, #b8ff89"
        : "to left, #ff8989, #ff8989"}
  );
  z-index: -1;
`;
