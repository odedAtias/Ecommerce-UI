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

	if (!products) {
		return <h2>Loading ...</h2>;
	}

	return (
		<div className='bg-light'>
			<ProductsList products={products} onCartUpdate={onCartUpdate} />
		</div>
	);
};

export default Catalog;
