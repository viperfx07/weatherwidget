import React, { Component } from 'react';

import InputBox from '../base/InputBox';
import WeatherWidgetFormGroup from './WeatherWidgetFormGroup';
import WeatherWidgetGraph from './WeatherWidgetGraph';
import toFirstCharUpperCase from '../../utils/tofirstcharuppercase';

export default class WeatherWidget extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: 'Title of widget',
			unit: 'metric',
			wind: 'on',
		};
		this.windOptions = ['on', 'off'];
		this.unitOptions = [
			{
				value: 'metric',
				label: 'C',
			},
			{
				value: 'imperial',
				label: 'F',
			},
		];
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		const { title, unit, wind } = this.state;
		return (
			<div className="u-mxa u-w100p c-weatherwidget">
				<div className="u-bd u-bgc-secondary u-w100p c-weatherwidget__inner">
					<div className="row c-weatherwidget__inner-row">
						<div className="col-12 col-sm-6 u-mbb2 u-mbb0-sm u-bdb u-bdb0-sm u-bdr-sm">
							<WeatherWidgetFormGroup
								label="Title"
								labelProps={{ htmlFor: 'title' }}
							>
								<input
									type="text"
									id="title"
									name="title"
									value={title}
									onChange={this.handleInputChange}
								/>
							</WeatherWidgetFormGroup>
							<WeatherWidgetFormGroup
								label="Temperature"
								labelComponent="legend"
								component="fieldset"
								inputGroupClassName="row"
							>
								{
									this.unitOptions.map(({ label, value }) => (
										<div
											key={`unit-${value}`}
											className="col-6"
										>
											<InputBox
												id={`unit-${value}`}
												type="radio"
												name="unit"
												value={value}
												checked={value == unit}
												onChange={this.handleInputChange}
											>
												&deg;{label}
											</InputBox>
										</div>
									))
								}
							</WeatherWidgetFormGroup>
							<WeatherWidgetFormGroup
								label="Wind"
								labelComponent="legend"
								component="fieldset"
								inputGroupClassName="row"
							>
								{
									this.windOptions.map(option => (
										<div
											key={`windOption-${option}`}
											className="col-6"
										>
											<InputBox
												id={`windOption-${option}`}
												type="radio"
												name="wind"
												value={option}
												checked={option == wind}
												onChange={this.handleInputChange}
											>
												{
													toFirstCharUpperCase(option)
												}
											</InputBox>
										</div>
									))
								}
							</WeatherWidgetFormGroup>
						</div>
						<div className="col-12 col-sm-6">
							<WeatherWidgetGraph
								title={title}
								units={unit}
								showWind={wind == 'on'}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
