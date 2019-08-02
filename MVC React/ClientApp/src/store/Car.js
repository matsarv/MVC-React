const initialState = {
    cars: [],
    loading: false,
    errors: {},
    forceReload: false
}

export const actionCreators = {
    requestCars: () => async (dispatch, getState) => {

        const url = 'api/Car/Cars';
        const response = await fetch(url);
        const cars = await response.json();
        dispatch({ type: 'FETCH_CARS', cars });
    },
    saveCar: car => async (dispatch, getState) => {

        const url = 'api/Car/SaveCar';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const requestOptions = {
            method: 'POST',
            headers,
            body: JSON.stringify(car)
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'SAVE_CAR', car });
    },
    deleteCar: carId => async (dispatch, getState) => {

        const url = 'api/Car/DeleteCar/' + carId;
        const requestOptions = {
            method: 'DELETE',
        };
        const request = new Request(url, requestOptions);
        await fetch(request);
        dispatch({ type: 'DELETE_CAR', carId });
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