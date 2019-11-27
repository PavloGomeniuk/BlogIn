import { LOG_IN, LOG_OUT, LOG_IN_FAILURE} from '../actions/SessionActions'

const initialState = {
  user: null,
  errorMsg: '',
  items: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        errorMsg: '',
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    case 'POSTS:SET_ITEMS':
      return {
        ...state,
        items: payload,
      };
    case 'POSTS:APPEND_ITEM':
      return {
        ...state,
        items: state.items ? [...state.items, payload] : [payload],
      };
    case 'POSTS:REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload),
      };
    default:
      return state
  }
}
