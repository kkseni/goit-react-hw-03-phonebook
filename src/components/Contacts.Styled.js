import styled from 'styled-components';

export const Button = styled.button`
  background-color: #228b22;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  border: #228b22;
  padding: 10px;
  &:hover,
  &:focus {
    background-color: #3cb371;
  }
`;
export const Title = styled.h2`
  font-size: 28px;
  margin-top: 50px;
  font-family: 'Montserrat', sans-serif;
  color: #228b22;
  text-aling: center;
`;

export const Input = styled.input`
curson:pointer;
 color: #228B22
 border-radius: 4px;
 border:2px solid #2E8B57;
 font-size: 18px;
 padding: 10px;`;

export const List = styled.h4`
  font-size: 18px;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  color: #2e8b57;
  margin-top: 80px;
`;
export const Oll = styled.li`
  font-size: 26px;
  color: #2e8b57;
`;
export const Label = styled.label`
  color: #228b22;
  font-size: 22px;
  font-weight: 500;
  margin-right: 10px;
`;
export const Add = styled.div`
  border: 4px solid #2f4f4f;
  height: 250px;
  width: 270px;
  padding: 40px;
`;
export const Container = styled.div``;
export const FilterName = styled.div`
  width: 270px;
`;

export const Num = styled.span`
  margin-left: 10px;
`;
export const Close = styled.button`
  width: 20px;
  heigth: 20px;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 2px;
  background-color: #228b22;
  &:hover,
  &:focus {
    background-color: #3cb371;
    color: #ff0000;
  }
`;
export const Notifie = styled.div`
  width: 150px;
  border: 2px solid #ff7f50;
  color: #ff0000;
  font-size: 18px;
  line-heigth: 1.14;
  padding: 5px;
`;
