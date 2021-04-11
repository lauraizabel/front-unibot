import { ReactNode } from 'react';

import { Container } from './styles';

interface RegisterProps {
  children: ReactNode;
}

function Register({ children }: RegisterProps) {
  return (
    <Container>
      <h1>Register</h1>
      {children}
    </Container>
  );
};

export default Register;
