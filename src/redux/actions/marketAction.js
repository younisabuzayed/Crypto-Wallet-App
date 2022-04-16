import axios from "axios";
import { GET_COIN_MARKET_FAILURE, GET_COIN_MARKET_STATE, GET_COIN_MARKET_SUCCESS, GET_HOLDINGS_FAILURE, GET_HOLDINGS_STATE, GET_HOLDINGS_SUCCESS } from "./ActionsType"

const getHoldingState = () =>
{
    return {
        type: GET_HOLDINGS_STATE,
    }
};

const getHoldingSuccess = (myHolding) =>
{
    return {
        type: GET_HOLDINGS_SUCCESS,
        payload: myHolding,
    }
};

const getHoldingFailure = (error) =>
{
    return {
        type: GET_HOLDINGS_FAILURE,
        payload: error,
    }
}

// Holding Market

export const getHoldings = (
    holdings = [], currency = 'usd', orderBy = "market_cap_desc",
    sparkline = true, priceChangePerc = '7d', perPage = 10,
    page = 1, 
) =>
{
    return async dispatch => 
    {
        dispatch(getHoldingState());

        let ids = holdings.map((item) => item.id).join(',')
        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&&ids=${ids}`;
        
        try 
        {
            const data = await axios.get(apiUrl, {
                headers:
                {
                    Accept: 'application/json',
                }
            });
            if (data.status === 200)
            {
                let myHolding = data.data.map((item) => 
                {
                    let coin = holdings.find(a => a.id === item.id);
                    let price7d = item.current_price / (1 + item.price_change_percentage_7d_in_currency * 0.01);
    
                    return {
                        id: item.id,
                        symbol: item.symbol,
                        name: item.name,
                        image: item.image,
                        current_price: item.current_price,
                        qty: coin.qty,
                        total: coin.qty * item.current_price,
                        price_change_percentage_7d_in_currency: item.price_change_percentage_7d_in_currency,
                        holding_value_change_7d: (item.current_price - price7d) * coin.qty,
                        sparkline_in_7d: {
                            value: item.sparkline_in_7d.price.map((price) => price * coin.qty)
                        }
                    }
                }) 
                dispatch(getHoldingSuccess(myHolding));
            }
            else
            {
                dispatch(getHoldingFailure(data.data))
            }
        } 
        catch (error) 
        {
            console.log(error.response);
            dispatch(getHoldingFailure(error))
        }
    }
};

//Coin Market

const getCoinMarketState = () =>
{
    return {
        type: GET_COIN_MARKET_STATE,
    };
}

const getCoinMarketSuccess = (coins) =>
{
    return {
        type: GET_COIN_MARKET_SUCCESS,
        payload: coins,
    }
};

const getCoinMarketFailure = (error) =>
{
    return {
        type: GET_COIN_MARKET_FAILURE,
        payload: error,
    }
}
export const getCoinMarket = (
    currency = 'usd', orderBy = "market_cap_desc", sparkline = true, 
    priceChangePerc = '7d', perPage = 10, page = 1,) =>
{
    return async dispatch =>
    {
        dispatch(getCoinMarketState());
        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`;
        
        try 
        {
            const data = await axios.get(apiUrl, {
                headers:
                {
                    Accept: 'application/json',
                }
            });
            if (data.status === 200)
            {
                dispatch(getCoinMarketSuccess(data.data));
            }
            else
            {
                dispatch(getCoinMarketFailure(data.data));
            }
        } 
        catch (error) {
            dispatch(getCoinMarketFailure(error))
        }


    }
}