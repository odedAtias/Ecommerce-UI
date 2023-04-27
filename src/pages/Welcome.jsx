// React Router Dom imports
import { Link } from 'react-router-dom';

// Welcome component
const Welcome = () => (
	<div
		className='bg-light d-flex align-items-center'
		style={{ minHeight: 'calc(100vh - 60px)' }}>
		<div className='container-lg'>
			<div className='row justify-content-center align-items-center'>
				{/* Welcome Text */}
				<div className='col-lg-6'>
					<h3 className='text-center mb-4'>Welcome to Shoply</h3>
					<p className='text-left my-4'>
						Welcome to Shoply! We're your go-to online shop for all your retail
						needs. Browse, select, and purchase your favorite items with ease,
						thanks to our user-friendly website and intuitive navigation. Enjoy
						competitive prices, fast shipping, and exceptional customer service.
						Thank you for choosing Shoply - we're excited to serve you!
					</p>
					<div className='text-center my-3'>
						<Link to='/catalog' className='btn btn-primary'>
							Let's start shopping
						</Link>
					</div>
				</div>
				{/* Welcome Image */}
				<div className='col-lg-6 px-3 text-center'>
					<img
						src='https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt='hello'
						className='img-fluid mt-lg-0 mt-4'
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Welcome;
