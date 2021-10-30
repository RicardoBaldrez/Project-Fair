import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'common/context/Cart';

export default function NavBar() {
  const { quantityProducts } = useCartContext();

  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={quantityProducts === 0}
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