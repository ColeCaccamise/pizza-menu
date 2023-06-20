export default function Order({ closeHour }) {
	return (
		<div className='order'>
			<p>
				We're open at our Rome location and accepting online orders until{' '}
				{closeHour}:00.{' '}
			</p>
		</div>
	);
}
