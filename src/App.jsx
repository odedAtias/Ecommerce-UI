// React Router Dom imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Custom components imports
import Welcome from './pages/Welcome';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

// App Component
const App = () => (
	<>
		<Router>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</Router>
	</>
);

export default App;
