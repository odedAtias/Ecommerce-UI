// React Router Dom imports
import { Link } from 'react-router-dom';

// Icons imports
import { AiOutlineShoppingCart, AiFillShop } from 'react-icons/ai';

const Navbar = () => {
	return (
		<nav className='bg-primary py-3'>
			<div className='container d-flex justify-content-between align-items-center'>
				{/* Logo */}
				<div>
					<Link to='/' className='text-light mb-0 text-decoration-none fs-5'>
						Shoply
					</Link>
				</div>
				{/* Navbar Links */}
				<div>
					<Link to='/catalog' className='text-light text-decoration-none mx-3'>
						<AiFillShop size={25} />
					</Link>
					<Link to='/cart' className='text-light text-decoration-none mx-2'>
						<AiOutlineShoppingCart size={25} />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
