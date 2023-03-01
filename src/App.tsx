import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./asset/data";
import Box from "./components/Box";
import Main from "./components/Main";

const Wrap = styled.div`
  display: grid;
  grid-template-rows: 8.5rem 1.5rem minmax(22rem, 40rem);
  align-items: center;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const H1 = styled.h1`
  margin-left: 2rem;
`;

const Hr = styled.hr`
  margin-bottom: 2rem;
`;

export type CardStateType = "front" | "back" | "left" | "right";

export interface Data {
  grade: number;
  id: number;
  ko: string;
  en: string;
}

const initData: Data[] = data.map((item, id) => ({
  ...item,
  grade: 1,
  id: id,
}));

const App = () => {
  const [value, setValue] = useState<Data[]>(initData);
  const [gradeState, setGradeState] = useState(1);
  const [btnGradeState, setBtnGradeState] = useState(gradeState);

  const handleCard = (
    wordState: CardStateType,
    setWordState: React.Dispatch<React.SetStateAction<CardStateType>>
  ) => {
    switch (wordState) {
      case "front":
        setWordState("back");
        break;
      default:
        setWordState("front");
        break;
    }
  };

  const handleGrade = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: Data
  ) => {
    e.stopPropagation();
    const index = value.findIndex((value) => value === item);
    setValue([
      ...value.slice(0, index),
      ...value.slice(index + 1),
      ...value.slice(index, index + 1),
    ]);
  };

  return (
    <Wrap>
      <Header>
        <H1>Memory Card</H1>
        <Box
          value={value}
          btnGradeState={btnGradeState}
          setBtnGradeState={setBtnGradeState}
        />
      </Header>
      <Hr />
      <Main
        value={value}
        gradeState={gradeState}
        setGradeState={setGradeState}
        btnGradeState={btnGradeState}
        handleCard={handleCard}
        handleGrade={handleGrade}
      />
    </Wrap>
  );
};

export default App;
