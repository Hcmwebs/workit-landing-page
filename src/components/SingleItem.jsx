import React from 'react';

const SingleItem = ({ id, title, text, number }) => {
	return (
		<>
			<div className=' w-full lg:h-80 flex flex-col justify-center items-center gap-y-6 md:flex-row gap-x-6 lg:flex-col px-4'>
				<header className='border border-[#24053E] text-[#24053E] w-12 h-12 text-lg font-bold rounded-full grid place-items-center'>
					{number}
				</header>
				<div className='gap-4 md:max-w-lg  lg:max-w-[354px] grid grid-cols-1 gap-y-4 text-center md:text-left lg:text-center'>
					<h2 className='font-semibold text-3xl leading-9'>{title}</h2>
					<p className='text-base lg:text-lg font-normal'>{text}</p>
				</div>
			</div>
		</>
	);
};

export default SingleItem;
