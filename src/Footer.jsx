import { useState, useEffect } from 'react';
import Order from './Order';

export default function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const [open, setOpen] = useState();

	useEffect(() => {
		if (hour >= openHour && hour <= closeHour) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [hour, openHour, closeHour]);

	return (
		<footer className='footer'>
			{open ? (
				<Order closeHour={closeHour} />
			) : (
				<p>
					Currently out pizzeria is closed. We're happy to welcome you between{' '}
					{openHour}:00 and {closeHour}:00. Any online orders placed at this
					time not be processed until {openHour}:00.
				</p>
			)}
		</footer>
	);
	// return React.createElement('footer', null, "We're currently open!");
}
