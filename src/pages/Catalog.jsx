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
				<h2 className='text-center'>Loading ...</h2>
			)}
		</div>
	);
};

export default Catalog;
