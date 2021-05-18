import React from "react";
import styled from "styled-components";
import { CardStateType, Data } from "../App";
import Card from "./Card";

const StyleMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

interface Props {
  value: Data[];
  gradeState: number;
  setGradeState: React.Dispatch<React.SetStateAction<number>>;
  btnGradeState: number;
  handleCard: (
    wordState: CardStateType,
    setWordState: React.Dispatch<React.SetStateAction<CardStateType>>
  ) => void;
  handleGrade: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: Data
  ) => void;
}

const Main: React.FC<Props> = (props) => {
  const { value, btnGradeState, handleCard, handleGrade } = props;

  return (
    <StyleMain>
      {value
        .filter((item) => item.grade === btnGradeState)
        .slice(0, 1)
        .map((item) => (
          <Card
            item={item}
            key={item.toString()}
            handleCard={handleCard}
            handleGrade={handleGrade}
          />
        ))}
    </StyleMain>
  );
};

export default Main;
