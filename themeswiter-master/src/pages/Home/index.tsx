import React from 'react';

import { Container, Wrapper } from './styles';

import landing from '../../utils/images/landing.png';
import search from '../../utils/images/search.svg';
import { Link } from 'react-router-dom';

const home: React.FC = () => {
  return (
      <Container>
          <Wrapper>
            <div className="img">
                <img src={landing} alt=""/>
            </div>
            <div className="search">
                <div className="searchbox">
                    <div className="form">
                        <h1>PESQUISAR POR UM DEV</h1>
                        <input value="" placeholder="USER" type="text"/> <br/>
                        <Link style={{ textDecoration: 'none' }} to="/list">
                            <button>
                            Pesquisar
                            <img src={search} alt=""/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="img2">
                <img src={landing} alt=""/>
            </div>
          </Wrapper>
      </Container>
      
  );
}

export default home;