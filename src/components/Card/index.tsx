import React, { useState } from "react";
import { CardStateType, Data } from "../../App";
import { StyleCard, FrontCard, BackCard, Left, Right, Filp } from "./styled";

interface Props {
  item: Data;
  handleCard: (
    wordState: CardStateType,
    setWordState: React.Dispatch<React.SetStateAction<CardStateType>>
  ) => void;
  handleGrade: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: Data
  ) => void;
}

const Card: React.FC<Props> = (props) => {
  const { item, handleCard, handleGrade } = props;
  const [wordState, setWordState] = useState<CardStateType>("front");

  return (
    <StyleCard>
      <FrontCard
        onClick={() => handleCard(wordState, setWordState)}
        wordState={wordState}
      >
        {item.ko}
      </FrontCard>

      <BackCard wordState={wordState}>
        {item.en}
        <Left
          wordState={wordState}
          onClick={(e) => {
            setWordState("left");
            handleCard(wordState, setWordState);
            item.grade > 0 && item.grade--;
            handleGrade(e, item);
          }}
        />
        <Right
          wordState={wordState}
          onClick={(e) => {
            setWordState("right");
            handleCard(wordState, setWordState);
            item.grade < 4 && item.grade++;
            handleGrade(e, item);
          }}
        />
        <Filp onClick={() => handleCard(wordState, setWordState)} />
      </BackCard>
    </StyleCard>
  );
};

export default Card;
