import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'common/context/Cart';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const history = useHistory();
  const { quantityProducts } = useCartContext();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantityProducts === 0}
        onClick={() => history.push('/cart')}
      >
        <Badge
          color="primary"
          badgeContent={quantityProducts}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}