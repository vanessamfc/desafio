import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import dogImg from '../../assets/dogImg.png';
import { Container } from './styles';

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
          <strong>Procure seu cachorro</strong>
        </Link>
      </div>
      <div>
        <img src={dogImg} alt="" />
      </div>
    </Container>
  );
};

export default Home;
