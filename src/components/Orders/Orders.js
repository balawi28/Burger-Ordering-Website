import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrder } from '../../features/order';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import BurgerPreview from '../BurgerPreview/BurgerPreview';
import './Orders.css';
export default function Orders() {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  return (
    <table className='Orders'>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Order Preview</th>
          <th>Price</th>
          <th>Order Status</th>
          <th>Cancel Order</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(({ id, elements, status, price }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{<BurgerPreview elements={elements} />}</td>
            <td>{price + '₪'}</td>
            <td>{status ? 'In Progress' : 'Canceled'}</td>
            <td onClick={() => dispatch(cancelOrder(id))}>
              <Trash className='Orders-Trash' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
