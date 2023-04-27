// Icons imports
import { AiFillDelete } from 'react-icons/ai';
import CartSummary from '../components/CartOutput/CartSummary';

// Cart component
const Cart = ({ cart, onCartUpdate }) => {
	return (
		<div className='container py-5'>
			{cart.length > 0 ? (
				<>
					<table className='table table-hover'>
						<thead>
							<tr>
								<th scope='col'>#</th>
								<th scope='col'></th>
								<th scope='col'>Name</th>
								<th scope='col'>Quantity</th>
								<th scope='col'>Price</th>
								<th scope='col'></th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, index) => (
								<tr key={index}>
									<th scope='row'>{index + 1}</th>
									<td>
										<img
											src={item.image}
											alt={item.title}
											width={50}
											height={50}
										/>
									</td>
									<td>{item.title}</td>
									<td>
										<div
											className='btn-group'
											role='group'
											aria-label='Quantity'>
											<button
												type='button'
												className='btn btn-outline-secondary'
												onClick={() => onCartUpdate(item, 'remove')}>
												-
											</button>
											<span className='btn btn-outline-secondary'>
												{item.quantity}
											</span>
											<button
												type='button'
												className='btn btn-outline-secondary'
												onClick={() => onCartUpdate(item, 'add')}>
												+
											</button>
										</div>
									</td>
									<td>{item.price * item.quantity} $</td>
									<td>
										<AiFillDelete
											size={25}
											style={{ cursor: 'pointer' }}
											onClick={() => onCartUpdate(item, 'clean')}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<CartSummary cart={cart} />
				</>
			) : (
				<h4 className='text-center fs-1 lead'>Your cart is currently empty</h4>
			)}
		</div>
	);
};

export default Cart;
