import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrder } from '../../features/order';
import { ReactComponent as Trash } from '../../icons/trash.svg';
import './Orders.css';
export default function Orders() {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  return (
    <table className='Orders'>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Price</th>
          <th>Order Status</th>
          <th>Cancel Order</th>
        </tr>
      </thead>
      <tbody>
        {orders.length ? (
          orders.map(({ id, elements, status, price }) => (
            <tr key={id}>
              <td style={{ backgroundColor: status ? '' : '#444' }}>{id}</td>
              <td style={{ backgroundColor: status ? '' : '#444' }}>
                {price + '₪'}
              </td>
              <td style={{ backgroundColor: status ? '' : '#444' }}>
                {status ? 'In Progress' : 'Canceled'}
              </td>
              <td onClick={() => dispatch(cancelOrder(id))}>
                <Trash className='Orders-Trash' />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>‌</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
