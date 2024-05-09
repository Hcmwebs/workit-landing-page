import React from 'react';

const SingleItem = ({ id, title, text, number }) => {
	return (
		<>
			<div className='card w-full max-w-[343px] md:max-w-xl flex flex-col justify-center items-center gap-y-6 md:flex-row gap-x-6 lg:max-w-[354px]'>
				<div className='card-header border border-[#24053E] text- w-12 h-12 text-lg font-bold rounded-full grid place-items-center'>
					{number}
				</div>
				<div className='card-body grid place-items-center text-center'>
					<h4 className='card-title text-3xl md:text-3xl leading-'>{title}</h4>
					<p>{text}</p>
				</div>
			</div>
		</>
	);
};

export default SingleItem;
