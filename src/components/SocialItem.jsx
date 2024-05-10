import React from 'react';

const SocialItem = ({ src, title }) => {
	return (
		<>
			<a href='#' className='cursor-pointer'>
				<img src={src} alt={title} />
			</a>
		</>
	);
};

export default SocialItem;
