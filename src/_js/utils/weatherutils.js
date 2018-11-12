import request from 'axios';
import sureThing from './surething';

const getWeatherDataFromCurrentLocation = async (units = 'metric') => {
	if (navigator.geolocation) {
		const { ok, data, error } = await sureThing(new Promise(resolve => navigator.geolocation.getCurrentPosition(resolve)));
		if (!ok) return { ok, error };

		const { coords } = data;
		const { latitude, longitude } = coords;
		const { ok: weatherDataOk, data: weatherDataData, error: weatherDataError } = await sureThing(request.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=d7754f81939f4afdf8228ec4b843ccc0`));

		const _data = weatherDataData ? weatherDataData.data : {};

		return {
			ok: weatherDataOk,
			data: {
				..._data,
				units,
			},
			error: weatherDataError ? weatherDataError.message : '',
		};
	}
	return {
		ok: false,
		error: 'Geolocation is not supported by the browser.',
	};
};

//ref: https://stackoverflow.com/questions/48750528/get-direction-from-degrees
const getDirectionCodeByDegree = (angle) => {
	const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
	const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
	return directions[index];
};

export {
	getWeatherDataFromCurrentLocation,
	getDirectionCodeByDegree,
};
