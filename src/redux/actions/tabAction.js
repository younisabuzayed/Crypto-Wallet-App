import { SET_TRADE_MODAL_VISIBILITY } from "./ActionsType"

const setTradeModalVisibilitySuccess = (isVisibile) =>
{
    return {
        type: SET_TRADE_MODAL_VISIBILITY,
        payload: isVisibile,
    }
}
export const setTradeModalVisibility = (isVisibile) =>
{
    return dispatch =>
    {
        dispatch(setTradeModalVisibilitySuccess(isVisibile))
    }
}