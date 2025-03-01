// src/app/store/reducer.ts

import { ActionsUnion, ActionTypes } from './actions';

export const initialState = {
    items: [],
    cart: []
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
    switch (action.type) {
        case ActionTypes.LoadSuccess:
            console.log(`items should be ${action.payload}`);
            return {
                ...state,
                items: [...action.payload]
            };
        
        case ActionTypes.Add:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        case ActionTypes.Remove:
            return {
                ...state,
                cart: [...state.cart.filter(item => item.name !== action.payload.name)]
            };

        default:
            return state;
    }
}