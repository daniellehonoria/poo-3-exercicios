import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
`
const Age = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;
const Classification = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;
const Color = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;
const Species = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;
export default function Card({
    animal
}) {
    return (
        <Container key={animal.id}>
            <Classification>Classificação: {animal.classification}</Classification>
            <Species>Especie: {animal.species}</Species>
            <Name>Nome: {animal.name}</Name>
            <Age>Idade: {animal.age}</Age>
            <Color>Cor: {animal.color}</Color>
        </Container>
    )
}