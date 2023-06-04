import React from 'react';
import { Card } from '../lib/project';

export default function CardElement({ id, value }: Card) {
  return (
    <div className='flex gap-2'>
      <div>B</div>
      <input type="text" value={ value } />
    </div>
  );
}