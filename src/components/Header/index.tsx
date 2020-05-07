import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoImg from '../../assets/logoImg.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={logoImg} alt="GoFinances" />
      <nav>
        {
          // Todo
        }
      </nav>
    </header>
  </Container>
);

export default Header;
