// Custom components imports
import Product from './Product';

// ProductList
const ProductsList = ({ products, onCartUpdate }) => {
	return (
		<div className='container py-5'>
			<div className='row g-5'>
				{products.map(p => (
					<Product key={p.id} product={p} onCartUpdate={onCartUpdate} />
				))}
			</div>
		</div>
	);
};

export default ProductsList;
