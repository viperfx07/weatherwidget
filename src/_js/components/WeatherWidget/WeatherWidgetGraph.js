import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getWeatherDataFromCurrentLocation, getDirectionCodeByDegree } from '../../utils/weatherutils';

const UNITS = {
	metric: {
		temperature: 'C',
		speed: 'km/h',
	},
	imperial: {
		temperature: 'F',
		speed: 'mile/h',
	},
};

export default class WeatherWidgetGraph extends Component {
	static defaultProps = {
		title: 'Title of widget',
		units: 'metric',
		showWind: true,
	}

	static propTypes = {
		title: PropTypes.string,
		units: PropTypes.oneOf(['metric', 'imperial']),
		showWind: PropTypes.bool,
	}

	constructor(props){
		super(props);
		this.state = {
			location: '',
			icon: '',
			temperature: '',
			wind: '',
			isLoading: false,
			error: '',
		};
	}

	componentDidMount(){
		this.fetchWeatherData(this.props.units);
	}

	componentDidUpdate(prevProps){
		const { units } = this.props;
		if (prevProps.units != units) {
			// fetch data
			this.fetchWeatherData(units);
		}
	}

	async fetchWeatherData(units){
		this.setState({ isLoading: true });
		const { ok, data, error } = await getWeatherDataFromCurrentLocation(units);
		if (ok) {
			this._setStateFromFetchedData(data);
		}
		else {
			this.setState({
				error,
				isLoading: false,
			});
		}
	}

	_setStateFromFetchedData(data) {
		const {
			main,
			name: location,
			wind,
			units,
			weather,
		} = data;
		this.setState({
			location,
			temperature: Math.floor(main.temp),
			icon: weather[0].icon,
			wind: `${getDirectionCodeByDegree(wind.deg)} ${wind.speed} ${UNITS[units].speed}`,
			isLoading: false,
		});
	}


	render() {
		const { title, showWind } = this.props;
		const { isLoading, temperature, wind, location, icon, error } = this.state;

		return (
	  		<section className="u-bgc-white u-pyb6 u-pxb5 c-weatherwidget-graph">
				<h1 className="h6 u-ttu u-mbb3 u-fw900">{ title || 'Title of widget' }</h1>
				{
					isLoading ? (
						<strong>Loading...</strong>
					) : (
						!error && (
							<div className="row">
								<div className="col-auto">
									<img src={`https://openweathermap.org/img/w/${icon}.png`} alt="" />
								</div>
								<div className="col-auto">
									<div className="u-mbb1">{location}</div>
									<div className="h2 u-mbb1">{temperature}&deg;</div>
									{
										showWind && (
											<div className="small">
												<strong>Wind</strong>&nbsp;&nbsp;<span>{wind}</span>
											</div>
										)
									}
								</div>
							</div>
						)
					)
				}
				{
					error && (<div style={{ color: 'red' }}>{error}</div>)
				}
    		</section>
		);
	}
}
