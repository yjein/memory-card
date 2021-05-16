import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardStateType, Data } from "../App";
import Card from "./Card";

const StyleMain = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
`;

interface Props {
  value: Data[];
  gradeState: number;
  setGradeState: React.Dispatch<React.SetStateAction<number>>;
  btnGradeState: number;
  handleCard: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    wordState: CardStateType,
    setWordState: React.Dispatch<React.SetStateAction<CardStateType>>
  ) => void;
  handleGrade: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => void
}

const Main: React.FC<Props> = (props) => {
  const {
    value,
    gradeState,
    btnGradeState,
    setGradeState,
    handleCard,
    handleGrade,
  } = props;

  const a = () => {
    return console.log("main useState");
  }
  const [b, sb] = useState(a);
  
  useEffect(()=>{
    console.log("main mount");
    return console.log("main unmount");
  },[])

  return (
    <StyleMain>
      {value
        .filter((item) => item.grade === btnGradeState)
        .slice(0, 16)
        .map((item, idx) => (
          <Card
            item={item}
            idx={idx}
            key={idx}
            value={value}
            gradeState={gradeState}
            setGradeState={setGradeState}
            handleCard={handleCard}
            handleGrade={handleGrade}
          />
        ))}
    </StyleMain>
  );
};

export default Main;
