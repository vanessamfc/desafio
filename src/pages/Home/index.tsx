import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Findadogo</h1>
      <p>Encontre aqui o seu melhor amigo</p>
      <Link to="/add-dog">aa</Link>
    </Container>
  );
};

export default Home;
