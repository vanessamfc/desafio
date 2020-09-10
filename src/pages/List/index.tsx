import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDog } from "../../store/modules/dogs/action";
import { Container } from "./styles";
import { FiX } from "react-icons/fi";

const List: React.FC = () => {
  //@ts-ignore
  const list = useSelector((state) => state.dogs.dogList) as any[];
  const dispatch = useDispatch();

  function handleDelete(index: number) {
    dispatch(deleteDog(index));
  }
  console.log(list);
  return (
    <Container>
      {list?.length ? (
        <ul>
          {list.map((dog: any, index: number) => (
            <>
              <li key={index}>
                <div>
                  <img src={dog.dogImage} alt="dogImage" />
                  <span>Nome: {dog.name}</span>
                  <span>Raça: {dog.breed}</span>
                </div>
                <div>
                  <button onClick={() => handleDelete(index)}>
                    <FiX />
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      ) : (
        <h1>Você ainda não tem nada adicionado</h1>
      )}
    </Container>
  );
};

export default List;
