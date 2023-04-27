// React Router Dom imports
import { Link } from 'react-router-dom';

// Welcome component
const Welcome = () => {
	return (
		<div
			className='bg-light d-flex align-items-center justify-content-center'
			style={{
				height: 'calc(100vh - 60px)', // The height to account for the navbar height
				width: '100%',
				position: 'absolute',
				top: '60px', // The top position to the navbar height
			}}>
			<div className='d-md-flex flex-md-row flex-column p-md-5 mx-md-3 mx-4'>
				{/* Welcome Text */}
				<div className=' text-md-left'>
					<h3 className='my-4 mx-5 fs-1 text-center'>Welcome to Shoply</h3>
					<p className='mx-5'>
						Welcome to Shoply! We're your go-to online shop for all your retail
						needs. Browse, select, and purchase your favorite items with ease,
						thanks to our user-friendly website and intuitive navigation. Enjoy
						competitive prices, fast shipping, and exceptional customer service.
						Thank you for choosing Shoply - we're excited to serve you!
					</p>
					<div className='text-center my-4'>
						<Link to='/catalog' className='btn btn-primary'>
							Let's start shopping
						</Link>
					</div>
				</div>
				{/* Welcome Image */}
				<div className='text-center'>
					<img
						src='https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt='hello'
						className='mt-md-0 mt-3'
						style={{ maxWidth: '100%', height: 'auto' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
