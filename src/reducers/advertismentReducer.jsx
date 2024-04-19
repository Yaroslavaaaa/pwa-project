const initialState = {
  advertisments: []
};

const advertismentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ADVERTISMENT':
      return {
        ...state,
        advertisments: [...state.advertisments, action.payload]
      };
    case 'DELETE_ADVERTISMENT':
      return {
        ...state,
        advertisments: state.advertisments.filter(advertisment => advertisment.key !== action.payload)
      };
    case 'UPDATE_ADVERTISMENT':
      return {
        ...state,
        advertisments: state.advertisments.map(advertisment => {
          if (advertisment.key === action.payload.id) {
            return {
              ...advertisment,
              ...action.payload.advertisment
            };
          }
          return advertisment;
        })
      };
    case 'LOAD_ADVERTISMENT':
      return {
        ...state,
        advertisments: Array.isArray(action.payload) ? action.payload : []
      };
    default:
      return state;
  }
};

export default advertismentReducer;
