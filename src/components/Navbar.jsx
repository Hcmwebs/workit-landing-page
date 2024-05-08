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
				<p className='text-white group-hover:text-[#44FFA1]'>
					Apply for access
				</p>
				<div className='underline'></div>
			</div>
		</div>
	);
};

export default Navbar;
