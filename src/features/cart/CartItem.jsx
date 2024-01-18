import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import {
  decreaseItemQuantity,
  deleteItem,
  getCurrQuantityById,
  increaseItemQuantity,
} from './cartSlice';
import EmptyCart from './EmptyCart';
import DeleteItem from './DeleteItem';
import UpdatedItemQuantity from './UpdatedItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrQuantityById(pizzaId));
  // const noPizzas = currentQuantity < 1;

  // if (noPizzas) return null;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="pr-2 text-sm font-bold">{formatCurrency(totalPrice)}</p>

        {/* <Button
          onClick={() => dispatch(increaseItemQuantity(pizzaId))}
          type="small"
        >
          +
        </Button>
        <Button
          onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
          type="small"
        >
          -
        </Button> */}

        <UpdatedItemQuantity
          currentQuantity={currentQuantity}
          pizzaId={pizzaId}
        />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
