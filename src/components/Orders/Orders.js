import React from 'react';
import './Orders.css';

export default function Orders() {
  return (
    <table className='Orders'>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Order Preview</th>
          <th>Order Status</th>
          <th>Price</th>
          <th>Cancel Order</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td>$100</td>
          <td></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td>$100</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
