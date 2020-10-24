import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

import logo  from '../../utils/images/logogit.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext( ThemeContext );

  return (
      <Container>
          <div className="divlogo">
            <img src={logo} alt=""/>
          </div>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={colors.switchBar}
            onColor={colors.switchBar}
          />
       
          
      </Container>
  );
};

export default Header;