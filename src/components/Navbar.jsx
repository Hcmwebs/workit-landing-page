import logo from '../assets/logo-light.svg';
const Navbar = () => {
	return (
		<div className='navbar align-element'>
			<div className='flex-1'>
				<a className='btn btn-ghost text-xl'>
					<img src={logo} alt='logo' />
				</a>
			</div>
			<div className='flex flex-col gap-1 group cursor-pointer'>
				<a
					href='#'
					className='text-white font-bold text-base lg:text-lg underline underline-offset-8 decoration-[#44FFA1] group-hover:text-[#44FFA1] transition-all duration-500 ease-in-out'
				>
					Apply for access
				</a>
			</div>
		</div>
	);
};

export default Navbar;
