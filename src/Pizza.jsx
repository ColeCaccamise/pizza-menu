import { useState } from 'react';

export default function Pizza({ pizzaObj }) {
	const [quantity, setQuantity] = useState(pizzaObj.quantity);
	const soldOut = quantity === 0;

	return (
		<li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
			<img src={pizzaObj.photoName} alt={`${pizzaObj.name}`} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<p>{quantity === 1 ? 'only 1 left!' : quantity + ' left'}</p>
				<span>{`${soldOut ? 'SOLD OUT' : pizzaObj.price}`}</span>
				<button
					disabled={soldOut}
					className='btn'
					onClick={() => setQuantity(quantity - 1)}
				>
					Add to order
				</button>
			</div>
		</li>
	);
}
