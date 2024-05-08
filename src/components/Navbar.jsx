const Navbar = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='btn btn-ghost text-xl'>
					<span className='font-bold'>Work</span>it
				</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<a href='#' className='link'>
							Apply for access
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
