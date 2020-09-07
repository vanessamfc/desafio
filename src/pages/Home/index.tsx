import React from "react";
import { Link } from "react-router-dom";
import dogImg from "../../assets/dogImg.png";
import { Container } from "./styles";

import { FiSearch } from "react-icons/fi";

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Findadogo</h1>
        <p>Encontre aqui o seu melhor amigo</p>
        <Link to="/add-dog">
          <span>
            <FiSearch />
          </span>
          <strong>clique aqui por enquanto</strong>
        </Link>
      </div>
      <div>
        <img src={dogImg} alt="" />
      </div>
    </Container>
  );
};

export default Home;
