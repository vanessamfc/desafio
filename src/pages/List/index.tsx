import React from "react";
import { useSelector } from "react-redux";

import { Container } from "./styles";

const List: React.FC = () => {
  //@ts-ignore
  const list = useSelector((state) => state.dogs.dogList) as any[];
  console.log(list);
  return (
    <Container>
      {list?.length ? (
        <ul>
          {list.map((dog: any) => (
            <li key={dog.name}>
              <img src={dog.dogImage} alt="dogImage" />
              <span>Nome: {dog.name}</span>
              <span>Raça: {dog.breed}</span>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Você ainda não tem nada adicionado</h1>
      )}
    </Container>
  );
};

export default List;
