import React from 'react';

const Pattern = ({ pattern, className }) => {
	return (
		<div className={className}>
			<img src={pattern} alt='background-pattern' />
		</div>
	);
};

export default Pattern;
