import React from 'react';

const CartSummary = ({ cart }) => {
	// Calculating the total price
	const totalPrice = cart
		.reduce((acc, item) => acc + item.price * item.quantity, 0)
		.toFixed(2);

	// Calculating the number of products
	const totalCount = cart
		.reduce((acc, item) => acc + item.quantity, 0)
		.toFixed(2);

	// Calculating the shipping cost
	const shipping = totalCount > 4 ? 15 : 0;

	return (
		<div className='bg-light border rounded p-3'>
			<div className='row'>
				<div className='col-6 col-md-4'>
					<p className='mb-0'>Subtotal: {totalPrice} $</p>
				</div>
				<div className='col-6 col-md-4'>
					<p className='mb-0'>Shipping: {shipping} $</p>
				</div>
				<div className='col-12 col-md-4'>
					<p className='mb-0'>
						Total: {Number(totalPrice + shipping).toFixed(2)} $
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartSummary;
