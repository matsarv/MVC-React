import axios from 'axios';

const initialState = {
    cars: [],
    loading: false,
    errors: {},
    forceReload: false
}

export const actionCreators = {
    requestCars: () => async (dispatch, getState) => {
        axios
            .get('https://localhost:44371/api/Car/Cars')
            .then(function (response) {
                const cars = response.data;
                dispatch({ type: 'FETCH_CARS', cars });
                console.log(response.data);
                console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
            });

        // const url = 'https://localhost:44371/api/Car/Cars';
        // const response = await fetch(url);
        // const cars = await response.json();
        // dispatch({ type: 'FETCH_CARS', cars });
    },
    saveCar: car => async (dispatch, getState) => {
        console.log('CarId: ' + car.carId);
        axios
            .post('https://localhost:44371/api/Car/SaveCar/', car)
            .then(function (response) {
                const car = response.data;
                dispatch({ type: 'SAVE_CAR', car });
                console.log(response.data);
                console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
            });

        // const url = 'https://localhost:44371/api/Car/SaveCar';
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const requestOptions = {
        //     method: 'POST',
        //     headers,
        //     body: JSON.stringify(car)
        // };
        // const request = new Request(url, requestOptions);
        // await fetch(request);
        // dispatch({ type: 'SAVE_CAR', car });
    },
    deleteCar: carId => async (dispatch, getState) => {
        console.log('CarId: ' + carId);
        axios
            .delete(`https://localhost:44371/api/Car/DeleteCar/${carId}`)
            .then(function (response) {
                // const car = response.data;
                dispatch({ type: 'DELETE_CAR', carId });
                console.log(response.data);
                console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
            });

        // const url = 'https://localhost:44371/api/Car/DeleteCar/' + carId;
        // const requestOptions = {
        //     method: 'DELETE',
        // };
        // const request = new Request(url, requestOptions);
        // await fetch(request);
        // dispatch({ type: 'DELETE_CAR', carId });
    }

};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case 'FETCH_CARS': {
            return {
                ...state,
                cars: action.cars,
                loading: false,
                errors: {},
                forceReload: false
            }
        }
        case 'SAVE_CAR': {
            return {
                ...state,
                cars: Object.assign({}, action.car),
                forceReload: true
            }
        }
        case 'DELETE_CAR': {
            return {
                ...state,
                cartId: action.carId,
                forceReload: true
            }
        }
        default:
            return state;
    }
};