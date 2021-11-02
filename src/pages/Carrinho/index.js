import { useContext, useState, useMemo } from 'react';
import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useCartContext } from 'common/context/Cart';
import { usePaymentContext } from 'common/context/Payment';
import { UserContext } from 'common/context/User';
import Produto from 'components/Produto';
import { useHistory } from 'react-router-dom';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';

function Carrinho() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { cart, valueTotalCart, makePurchase } = useCartContext();
  const { balance } = useContext(UserContext);
  const { formPayment, paymentTypes, changingFormPayment } = usePaymentContext();
  const history = useHistory();
  const total = useMemo(() => balance - valueTotalCart, [balance, valueTotalCart]);
  
  return (
    <Container>
      <Voltar onClick={() => history.goBack()} />
      <h2>
        Carrinho
      </h2>
      {cart.map(product => (
        <Produto
          { ...product }
          key={product}
        />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formPayment.id}
          onChange={(e) => changingFormPayment(e.target.value)}
        >
          {paymentTypes.map(type => (
            <MenuItem value={type.id} key={type.id}>
              { type.name }
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho:</h2>
            <span>R$ { valueTotalCart.toFixed(2) }</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span> R$ { Number(balance).toFixed(2) }</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ { total.toFixed(2) }</span>
          </div>
        </TotalContainer>
      <Button
        onClick={() => {
          makePurchase();
          setOpenSnackbar(true);
        }}
        disabled={total <= 0 || cart.length === 0}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={
          { 
            vertical: 'top',
            horizontal: 'right'
          }
        }
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default Carrinho;