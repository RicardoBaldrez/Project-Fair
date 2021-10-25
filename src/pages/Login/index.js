import { useHistory } from 'react-router-dom'

import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
import { Button } from '@material-ui/core';

import { UserContext } from 'common/context/User';

function Login() {
  const history = useHistory();

  return (
    <Container>
      {/* Consumindo os valores passado pelo provedor */}
      <UserContext.Consumer>
        {({ name, setName, balance, setBalance }) => (
          <>
            <Titulo>
              Insira o seu nome
            </Titulo>
            <InputContainer>
              <InputLabel>
                Nome
              </InputLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Saldo
              </InputLabel>
              <Input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  R$
                </InputAdornment>
              }
            />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push('/fair')}
            >
              Avançar
            </Button>
          </>
        )}
      </UserContext.Consumer>
    </Container>
  )
};

export default Login;