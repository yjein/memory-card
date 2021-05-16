import React, { useEffect, useState } from "react";
import { CardStateType, Data } from "../../App";
import { StyleCard, FrontCard, BackCard, Left, Right } from "./styled";

interface Props {
  item: Data;
  idx: number;
  value: Data[];
  gradeState: number;
  setGradeState: React.Dispatch<React.SetStateAction<number>>;
  handleCard: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    wordState: CardStateType,
    setWordState: React.Dispatch<React.SetStateAction<CardStateType>>
  ) => void;
  handleGrade: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    idx: number
  ) => void;
}

const Card: React.FC<Props> = (props) => {
  const { item, idx, value, gradeState, setGradeState, handleCard, handleGrade } =
    props;
  const [wordState, setWordState] = useState<CardStateType>("front");

  const a = () => {
    return console.log("card useState");
  };
  const [b, sb] = useState(a);

  useEffect(() => {
    console.log("card mount");
    // return console.log("card unmount");
  }, []);

  return (
    <StyleCard onClick={(e) => handleCard(e, wordState, setWordState)}>
      <FrontCard wordState={wordState}>{item.ko}</FrontCard>
      <BackCard wordState={wordState}>
        {item.en}
        <Left
          wordState={wordState}
          onClick={(e) => {
            setWordState("left");
            handleGrade(e, idx);
          }}
        />
        <Right
          wordState={wordState}
          onClick={(e) => {
            setWordState("right");
            handleGrade(e, idx);
          }}
        />
      </BackCard>
    </StyleCard>
  );
};

export default Card;
