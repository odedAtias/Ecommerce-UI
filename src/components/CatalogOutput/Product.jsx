// Product
const Product = ({ product, onCartUpdate }) => {
	const { title, description, rating, image, price } = product;

	return (
		<div className='col-lg-4 col-md-4 col-sm-6'>
			<div
				className='card shadow'
				style={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					opacity: 0.9,
				}}>
				{/* Add to cart button */}
				<button
					onClick={() => {
						onCartUpdate(product, 'add');
						alert(`The product ${title} added to your cart !`);
					}}
					className='btn btn-info btn-sm text-white'
					style={{
						position: 'absolute',
						top: '0',
						right: '0',
						zIndex: '1',
					}}>
					Add +
				</button>
				{/* Price */}
				<div
					className='btn btn-dark btn-sm text-white'
					style={{
						position: 'absolute',
						top: '0',
						left: '0',
						zIndex: '1',
					}}>
					{price} $
				</div>
				{/* Total remaining */}
				<div
					style={{
						position: 'absolute',
						top: '100px',
						left: '10px',
						zIndex: '1',
					}}>
					{rating.count} pieces
				</div>
				{/* Product rating */}
				<div
					style={{
						position: 'absolute',
						top: '100px',
						right: '10px',
						zIndex: '1',
					}}>
					{rating.rate}/5
				</div>
				{/* Product image */}
				<img
					src={image}
					className='card-img-top border-bottom'
					alt='...'
					style={{
						height: '150px',
						objectFit: 'contain',
						padding: '20px',
					}}
				/>
				{/* Product Title */}
				<p
					className='card-title text-center'
					style={{
						height: '100px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '18px',
					}}>
					{title}
				</p>
				{/* Badges */}
				<div
					className='border-top bg-secondary text-white flex-grow-1 p-3'
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<p style={{ fontSize: '13px' }}> {description}</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
