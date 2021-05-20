import React from "react";
import styled from "styled-components";
import { Data } from "../App";

const BoxWrap = styled.div`
  display: flex;
  margin: auto 3rem auto 0;
`;

const StyleBox = styled.div<{ val: number; btnGradeState: number }>`
  width: 2rem;
  height: 2rem;
  border: solid 1px #000000;
  background: ${({ val, btnGradeState }) =>
    val === btnGradeState ? "#b8ff89" : "ffffff"};
  cursor: pointer;
`;

const Div = styled.div`
  margin: 0 0.75rem;
  text-align: center;
`;

interface Props {
  value: Data[];
  btnGradeState: number;
  setBtnGradeState: React.Dispatch<React.SetStateAction<number>>;
}

const Box: React.FC<Props> = (props) => {
  const { value, btnGradeState, setBtnGradeState } = props;

  return (
    <BoxWrap>
      {[1, 2, 3, 4, 5].map((val) => (
        <Div key={val.toString()}>
          <StyleBox
            val={val}
            btnGradeState={btnGradeState}
            onClick={() => setBtnGradeState(val)}
          >
            {val}
          </StyleBox>
          {value.filter((item) => item.grade === val).length}
        </Div>
      ))}
    </BoxWrap>
  );
};

export default Box;
