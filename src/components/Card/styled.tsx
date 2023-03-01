import styled from "styled-components";
import { CardStateType } from "../../App";

export const StyleCard = styled.div`
  position: relative;
  padding: 0.5rem;
  width: 36.75rem;
  height: 25.5rem;
  width: 70%;
  max-width: 36.75rem;
  height: 25.5rem;
`;

export const FrontCard = styled.div<{
  wordState: CardStateType;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #333333;
  border-radius: 4.5rem;
  font-size: 3rem;
  background: #ffffff;
  box-shadow: 0 0 3.5rem -2.75rem #000000;
  cursor: pointer;

  transform: perspective(500px)
    rotateY(${({ wordState }) => (wordState === "front" ? "0deg" : "180deg")});
  transition: transform 150ms linear, opacity 300ms;
  opacity: ${({ wordState }) => (wordState === "front" ? 1 : 0)};
  z-index: ${({ wordState }) => (wordState === "front" ? 1 : -1)};
`;

export const BackCard = styled.div<{
  wordState: CardStateType;
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #333333;
  border-radius: 4.5rem;
  font-size: 3rem;
  box-shadow: 0 0 3.5rem -2.75rem #000000;

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
  border-radius: 4.5rem 0 0 4.5rem;
  background: linear-gradient(
    ${({ wordState }) =>
      wordState === "right"
        ? "to right, #b8ff89, #b8ff89"
        : "to right, #ff8989, #ff8989"}
  );
  cursor: pointer;
  transition: all 200ms;
  z-index: -1;
`;

export const Right = styled.div<{ wordState: CardStateType }>`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  border-radius: 0 4.5rem 4.5rem 0;
  background: linear-gradient(
    ${({ wordState }) =>
      wordState !== "left"
        ? "to left, #b8ff89, #b8ff89"
        : "to left, #ff8989, #ff8989"}
  );
  cursor: pointer;
  z-index: -1;
`;

export const Filp = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4rem;
  height: 4rem;
  background-color: #ffffffbd;
  border: 2px dashed #3232329b;
  border-radius: 0 0 4.5rem 0;
  cursor: pointer;
`;
