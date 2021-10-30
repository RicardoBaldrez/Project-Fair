import { useContext } from 'react';
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

import {
  Button
} from '@material-ui/core';

import {
  UserContext
} from 'common/context/User';

function Login() {
  const history = useHistory();
  const {
    name,
    setName,
    balance,
    setBalance
  } = useContext(UserContext);

  return (
    <Container >
      <Titulo >
        Insira o seu nome 
      </Titulo> 
      <InputContainer>
        <InputLabel>
          Nome 
        </InputLabel> 
        <Input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
      </InputContainer> 
      <InputContainer>
        <InputLabel >
          Saldo
        </InputLabel> 
        <Input type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        /> 
      </InputContainer>
      <Button variant="contained"
        color="primary"
        disabled={name.length < 4}
        onClick={() => history.push('/fair')} 
      >
        Avançar
      </Button> 
    </Container>
  )
};

export default Login;