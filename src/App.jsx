// Hooks import
import { useState } from 'react';

// React Router Dom imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// StyleSheet imports
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom components imports
import Welcome from './pages/Welcome';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Navbar from './components/UI/Navbar';

// App Component
const App = () => {
	// Catalog State initialize
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	// Catalog handlers
	const handleCartUpdate = (item, command) => {
		const index = cart.findIndex(cartItem => cartItem.id === item.id);
		// Item already exists in the cart
		if (index !== -1) {
			const updatedCart = [...cart];
			if (command === 'add') {
				// If the command is 'add', increment the quantity of the existing item
				updatedCart[index].quantity += 1;
			} else if (command === 'remove') {
				// If the command is 'remove', decrement the quantity of the existing item or remove it entirely if the quantity is 1
				if (updatedCart[index].quantity === 1) {
					updatedCart.splice(index, 1);
				} else {
					updatedCart[index].quantity -= 1;
				}
			} else if (command === 'clean') {
				console.log('here');
				updatedCart.splice(index, 1);
			}
			setCart(updatedCart);
		} else {
			// Item doesn't exist in the cart
			if (command === 'add') {
				// If the command is 'add', add a new item to the cart with quantity 1
				setCart([...cart, { ...item, quantity: 1 }]);
			}
		}
	};

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route
						path='/catalog'
						element={
							<Catalog
								products={products}
								onCartUpdate={handleCartUpdate}
								setProducts={setProducts}
							/>
						}
					/>
					<Route
						path='/cart'
						element={<Cart cart={cart} onCartUpdate={handleCartUpdate} />}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
