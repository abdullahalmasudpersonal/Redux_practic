export const initialState = {
    firstName: '',
    lustName: '',
    email: '',
    gender: '',
    education: '',
    quantity: 0,
    feedback: '',
    term: false
};

export const reducer = (state, action) => {
    //  console.log(action)
    switch (action.type) {
        case 'INPUT':
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case 'TOGGLE':
            return {
                ...state,
                term: state.term,
            };
      /*   case 'INCREMENT':
            return {
                ...state,
                term: !state.term,
            };
        case 'INCREMENT':
            return {
                ...state,
                term: !state.term,
            }; */
        default:
            return state;
    }

    /*     if(action.type === 'INPUT'){
            return{
                ...state,
                [action.payload.name] : action.payload.value,
            };
        }; */
};