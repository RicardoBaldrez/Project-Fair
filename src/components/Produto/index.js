import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { CartContext } from 'common/context/Cart';

function Produto({
  nome,
  foto,
  id,
  valor,
}) {
  const { cart, setCart } = useContext(CartContext);

  function addProduct(newProduct) {
    const productExist = cart.some(productItem => productItem.id === newProduct.id);
    if(!productExist) {
      newProduct.quantity = 1;
      return setCart(previousCart => 
        [ ...previousCart, newProduct]
      );
    }
    setCart(previousCart => previousCart.map(itemCart => {
      if(itemCart.id === newProduct.id) itemCart.quantity += 1;
      return itemCart;
    }))
  }

  return (
      <Container>
        <div>
          <img
            src={`/assets/${foto}.png`}
            alt={`foto de ${nome}`}
          />
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
          >
            <RemoveIcon />
          </IconButton>
          <IconButton onClick={() => addProduct({ nome, foto, id, valor })}>
            <AddIcon />
          </IconButton>
        </div>
      </Container>
  )
}

export default memo(Produto)