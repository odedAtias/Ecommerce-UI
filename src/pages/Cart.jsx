// Cart component
const Cart = ({ cart, onCartUpdate }) => {
	return (
		<div className='p-5'>
			{cart.length > 0 ? (
				<table class='table table-hover'>
					{/* The head of the table */}
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Image</th>
							<th scope='col'>Name</th>
							<th scope='col'>quantity</th>
							<th scope='col'>Price</th>
						</tr>
					</thead>
					{/* The body of the table */}
					<tbody>
						{cart.map((item, index) => (
							<tr key={index}>
								<th scope='row'>{index + 1}</th>
								<td>
									<img src={item.image} width={50} height={50} />
								</td>
								<td>{item.title}</td>
								<td>
									<div>
										<button onClick={() => onCartUpdate(item, 'remove')}>
											-
										</button>
										<span>{item.quantity}</span>
										<button onClick={() => onCartUpdate(item, 'add')}>+</button>
									</div>
								</td>
								<td>{item.price * item.quantity} $</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<h4 className='text-center'>No Have items yet</h4>
			)}
		</div>
	);
};

export default Cart;
