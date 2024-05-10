import React from 'react';

const SocialItem = ({ src, title, link }) => {
	return (
		<>
			<a href={link} className='cursor-pointer'>
				<img src={src} alt={title} />
			</a>
		</>
	);
};

export default SocialItem;
