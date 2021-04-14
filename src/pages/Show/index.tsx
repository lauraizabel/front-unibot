import { ReactNode } from 'react';

import { Container } from './styles';

interface ShowProps {
  children: ReactNode;
}

function Show({ children }: ShowProps) {
  return (
    <Container>
      <h1>Show</h1>
      {children}
    </Container>
  );
};

export default Show;
