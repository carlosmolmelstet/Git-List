import React, { useState, useCallback } from 'react';
import { Container, Wrapper } from './styles';

import landing from '../../utils/images/landing.png';
import search from '../../utils/images/search.svg';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

interface Usuario {
    name: string;
}


const Home: React.FC = () => {
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    
        
    const handleChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setUsuario({
                ...usuario,
                [e.currentTarget.name]: e.currentTarget.value,
            });
        },
        [usuario]
    );
    
    
    
    
    const userName = usuario.name;
  
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
                        <Input placeholder="USER" name="name" onChange={handleChange }/> <br/>
                        <Link style={{ textDecoration: 'none' }}  to={`/list/${userName}`}>
                            <button onClick={() => console.log(userName)} >
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

export default Home;
