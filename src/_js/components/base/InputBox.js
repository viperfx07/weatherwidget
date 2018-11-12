import React, {	Component } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ type, id, children, ...props }) => (
	<label htmlFor={id} className="o-inputbox">
		<input
			{...props}
			id={id}
			type={type}
			className="sr-only"
		/>
		<span className="u-dib u-vam u-mrb5 o-inputbox__box" />
		<span className="u-dib u-vam o-inputbox__text">
			{children}
		</span>
	</label>
);

InputBox.defaultProps = {
	type: 'checkbox',
};

InputBox.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
};

export default InputBox;
