import { GET_COIN_MARKET_FAILURE, GET_COIN_MARKET_STATE, GET_COIN_MARKET_SUCCESS, GET_HOLDINGS_FAILURE, GET_HOLDINGS_STATE, GET_HOLDINGS_SUCCESS } from "../actions/ActionsType";

const initialState = {
    myHoldings: [],
    coins:[],
    error: null,
    loading: false,
};

const marketReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case GET_HOLDINGS_STATE:
            return {
                ...state,
                loading: true,
            };
        case GET_HOLDINGS_SUCCESS:
            return {
                ...state,
                myHoldings: action.payload,
                loading: false,
            };
        case GET_HOLDINGS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case GET_COIN_MARKET_STATE:
            return {
                ...state,
                loading: true,
            }
        case GET_COIN_MARKET_SUCCESS:
            return {
                ...state,
                coins: action.payload,
                loading: false,
            }
        case GET_COIN_MARKET_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
};

export default marketReducer;