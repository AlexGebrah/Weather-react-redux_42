import {useDispatch, useSelector} from "react-redux";
import {changeCity} from "../actions/cityAction.js";
import {changeWeather} from "../actions/weatherAction.js";

const Form = () => {
const {city} = useSelector(state => state.city)
    const dispatch = useDispatch();

    const getCity = e => {
        e.preventDefault();
        dispatch(changeWeather(city.payload));
        dispatch('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => dispatch(changeCity(e.target.value))} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;