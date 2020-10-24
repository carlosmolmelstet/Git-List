import React from 'react';

import { Container, Wrapper } from './styles';

import erro from '../../utils/images/errorImg.png';

const NotFound: React.FC = () => {
  return (
      <Container>
        <Wrapper>
          <div className="image">
            <img src={erro} alt=""/>
          </div>
          <div className="message">
            <p>Oops!</p>
            <span>404</span>
            <p>Page not found</p>
          </div>
          <div className="image2">
            <img src={erro} alt=""/>
          </div>
        </Wrapper>
      </Container>
  );
}

export default NotFound;