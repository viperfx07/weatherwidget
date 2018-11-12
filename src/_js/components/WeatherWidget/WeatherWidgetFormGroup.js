import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WeatherWidgetFormGroup extends Component {
	static defaultProps = {
		component: 'div',
		labelProps: null,
		inputGroupClassName: '',
	}

	static propTypes = {
		label: PropTypes.string.isRequired,
		labelProps: PropTypes.object,
		inputGroupClassName: PropTypes.string,
		component: PropTypes.string,
	}

	render() {
		const { label, labelProps, inputGroupClassName, component, children } = this.props;
		const ParentComponent = component;
		const LabelComponent = component === 'fieldset' ? 'legend' : 'label';

		return (
			<ParentComponent className="u-mbb2 u-mbb0-last">
				<LabelComponent {...labelProps} className="u-fw400">{label}</LabelComponent>
				<div className={inputGroupClassName}>
					{
						children
					}
				</div>
			</ParentComponent>
		);
	}
}
