import axios from 'axios';

export const fetchCar = () => {
    return async (dispatch) => {
        const {data} = await axios.get(`https://rent-cars-api.herokuapp.com/admin/car`);
        console.log(data);
        data.forEach((car) => {
            car.passenger = "4 orang";
            car.type = "Manual";
            car.year = "Tahun 2020";
        })
        dispatch({type: "fetchCarData", payload: data});
    }
}