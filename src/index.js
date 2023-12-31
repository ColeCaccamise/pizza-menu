import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import './index.css';

const inventory = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
		quantity: 4,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
		quantity: 2,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
		quantity: 3,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
		quantity: 4,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
		quantity: 0,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
		quantity: 1,
	},
];

function App() {
	const data = {};
	for (let item of inventory) {
		data[item.name] = item.quantity;
	}

	// const [inventory, setInventory] = useState(data);
	return (
		<div className='container'>
			<Header />
			<Menu inventory={inventory} />
			<Footer />
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// renders components twice for finding bugs & checks if outdated react API parts are being used - good for development
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
