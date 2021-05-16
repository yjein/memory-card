import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Data } from "../App";

const BoxWrap = styled.div`
  display: flex;
  margin: auto 3rem auto 0;
`;

const StyleBox = styled.div`
  /* display: flex;
  justify-content: space-around; */
  width: 2rem;
  height: 2rem;
  border: solid 1px #000000;
  cursor: pointer;
`;

const Div = styled.div`
  margin: 0 0.75rem;
  text-align: center;
`;

interface Props {
  value: Data[];
  setBtnGradeState: React.Dispatch<React.SetStateAction<number>>;
}

const Box: React.FC<Props> = (props) => {
  const { value, setBtnGradeState } = props;

  const a = () => {
    return console.log("box useState");
  };
  const [b, sb] = useState(a);

  useEffect(() => {
    console.log("box mount");
    return console.log("box unmount");
  }, []);

  return (
    <BoxWrap>
      {console.log("BoxWrap")}
      <Div>
        {console.log("Div 1")}
        <StyleBox onClick={() => setBtnGradeState(1)}>
          1{console.log("StyleBox 1")}
        </StyleBox>
        {value.filter((item) => item.grade === 1).length}
      </Div>
      <Div>
        {console.log("Div 2")}
        <StyleBox onClick={() => setBtnGradeState(2)}>
          2{console.log("StyleBox 2")}
        </StyleBox>
        {value.filter((item) => item.grade === 2).length}
      </Div>
      <Div>
        <StyleBox onClick={() => setBtnGradeState(3)}>3</StyleBox>
        {value.filter((item) => item.grade === 3).length}
      </Div>
      <Div>
        <StyleBox onClick={() => setBtnGradeState(4)}>4</StyleBox>
        {value.filter((item) => item.grade === 4).length}
      </Div>
      <Div>
        <StyleBox onClick={() => setBtnGradeState(5)}>5</StyleBox>
        {value.filter((item) => item.grade === 5).length}
      </Div>
    </BoxWrap>
  );
};

export default Box;
