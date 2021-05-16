import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "./asset/data";
import Box from "./components/Box";
import Main from "./components/Main";

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

console.log("app 밖");


const App = () => {
  const [value, setValue] = useState<Data[]>(initData);
  const [gradeState, setGradeState] = useState(1);
  const [btnGradeState, setBtnGradeState] = useState(gradeState);

  const a = () => {
    return console.log("app useState");
  }
  const [b, sb] = useState(a);

  const handleCard = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    wordState: CardStateType,
    setWordState: React.Dispatch<React.SetStateAction<CardStateType>>
  ) => {
    switch (wordState) {
      case "front":
        setWordState("back");
        break;
      case "back":
        break;
      case "left":
        [1, 2, 3, 4, 5].map(() => setGradeState(gradeState - 1));
        console.log(gradeState);
        break;
      case "right":
        [1, 2, 3, 4, 5].map(() => setGradeState(gradeState + 1));
        console.log(gradeState);
        break;
    }
    console.log(wordState);
  };

  const handleGrade = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    idx: number
  ) => {
    e.stopPropagation();
    const index = value.findIndex((item) => item.id === idx);
    setValue([
      ...value.slice(0, index),
      ...value.slice(index + 1),
      ...value.slice(index, index + 1).map((item) => {
        const result: Data = { ...item, grade: gradeState };
        return result;
      }),
    ]);
    console.log(gradeState, index, idx);
  };

  useEffect(() => {
    console.log("mount");
    return console.log("unmount");
  }, []);

  return (
    <div>
      <Header>
        <H1>Memory Card</H1>
        <Box value={value} setBtnGradeState={setBtnGradeState} />
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
    </div>
  );
};

export default App;
