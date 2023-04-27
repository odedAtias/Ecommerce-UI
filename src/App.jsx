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
const App = () => (
	<>
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</Router>
	</>
);

export default App;
