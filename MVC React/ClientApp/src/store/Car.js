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

        default:
            return state;
    }
};