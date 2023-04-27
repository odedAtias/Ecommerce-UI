// Hooks import
import { useState, useEffect } from 'react';

// React Router Dom imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Third-party libraries
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';

// StyleSheet imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

// Custom components imports
import Welcome from './pages/Welcome';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Navbar from './components/UI/Navbar';

// App Component
const App = () => {
	// Cookies set function - i set the expiration after 7 days
	const setCookieCart = cart => {
		Cookies.set('cart', JSON.stringify(cart), { expires: 7 });
	};

	// Catalog State initialize
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	// App Handlers
	const handleCartUpdate = (item, command) => {
		const index = cart.findIndex(cartItem => cartItem.id === item.id);
		if (index !== -1) {
			const updatedCart = [...cart];
			if (command === 'add') {
				updatedCart[index].quantity += 1;
			} else if (command === 'remove') {
				if (updatedCart[index].quantity === 1) {
					updatedCart.splice(index, 1);
				} else {
					updatedCart[index].quantity -= 1;
				}
			} else if (command === 'clean') {
				updatedCart.splice(index, 1);
			}
			setCart(updatedCart);
			setCookieCart(updatedCart);
		} else {
			if (command === 'add') {
				setCart([...cart, { ...item, quantity: 1 }]);
				setCookieCart([...cart, { ...item, quantity: 1 }]);
				toast.success('Your cart has been updated successfully!', {
					autoClose: 2000,
				});
			}
		}
	};

	//  loading the cart from cookies when the component mounts:
	useEffect(() => {
		const cartCookie = Cookies.get('cart');
		if (cartCookie) {
			setCart(JSON.parse(cartCookie));
		}
	}, []);

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
			<ToastContainer />
		</>
	);
};

export default App;
