// Hooks imports
import { useEffect } from 'react';

// Custom components imports
import ProductsList from '../components/CatalogOutput/ProductsList';

// Catalog component
const Catalog = ({ products, onCartUpdate, setProducts }) => {
	// Fetching the products from the store api
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			setProducts(data);
		};
		fetchProducts();
	}, [products]);

	return (
		<div className='bg-light'>
			{products?.length ? (
				<ProductsList products={products} onCartUpdate={onCartUpdate} />
			) : (
				<div
					className='d-flex align-items-center justify-content-center bg-white'
					style={{ height: '300px' }}>
					<div
						className='spinner-border'
						role='status'
						style={{ width: '3rem', height: '3rem' }}>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Catalog;
