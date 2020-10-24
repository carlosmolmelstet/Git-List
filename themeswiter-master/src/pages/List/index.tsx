import React from 'react';

import { Container, Wrapper, Profile, Repo } from './styles';


import foto from '../../utils/images/profille.png';
import local from '../../utils/images/local.svg';
import organization from '../../utils/images/organization.svg';
import twitter from '../../utils/images/twitter.svg';
import following from '../../utils/images/following.svg';
import followers from '../../utils/images/followers.svg';
import github from '../../utils/images/github.svg';
import star from '../../utils/images/star.svg';

const List: React.FC = () => {
  return (
      <Container>
        <Wrapper>
          <Profile>
            <div className="description">
              <div className="photo">
                <img src={foto} alt="name"/>
              </div>
              <div className="names">
                <h1>Carlos Molmelstet</h1>
                <span>@carlosmolmelstet</span>
                <p>Estudante de Programação, atualmente focado no Front End</p>
              </div>
            </div>
            <div className="infos">
              <div className="infoItem">
               <img src={local} alt=""/> Joinville SC <br/>
              </div>
              <div className="infoItem">
                <img src={organization} alt=""/> @SoftExpert <br/>
              </div>
              <a target="_blake" href="https://twitter.com/Molmelstet16">
                <div className="infoItem">
                  <img src={twitter} alt=""/> @Molmlestet16 <br/>
                </div>
              </a>
            </div>
            <div className="footer">
              <div className="followers">
                <div className="followersItem">
                 <img src={followers} alt=""/> 1616 seguidores
                </div>
                <div className="followersItem">
                 <img src={following} alt=""/> 16 seguindo
                </div>
                
              </div>
              <div className="btn">
                <a target="_blake" href="https://github.com/carlosmolmelstet">
                  <button>
                    <p>VER NO GITHUB</p> 
                    <img src={github} alt=""/>
                  </button>
                </a>
              </div>
              </div>
          </Profile>
          <Repo>
            <h3>happy</h3>
            <p>Projeto construído durante o Next Level Week #03</p>
            <div className="footerRepo">
              <div className="stars">
                <img src={star} alt=""/>
                16
              </div>
              <div className="btn">
                  <a target="_blake" href="https://github.com/carlosmolmelstet">
                    <button>
                      <p>VER REPOSITORIO</p> 
                      <img src={github} alt=""/>
                    </button>
                  </a>
                </div>
            </div>
          </Repo>
          <Repo>
            <h3>happy</h3>
            <p>Projeto construído durante o Next Level Week #03</p>
            <div className="footerRepo">
              <div className="stars">
                <img src={star} alt=""/>
                16
              </div>
              <div className="btn">
                  <a target="_blake" href="https://github.com/carlosmolmelstet">
                    <button>
                      <p>VER REPOSITORIO</p> 
                      <img src={github} alt=""/>
                    </button>
                  </a>
                </div>
            </div>
          </Repo>
        </Wrapper>
      </Container>
  );
}

export default List;