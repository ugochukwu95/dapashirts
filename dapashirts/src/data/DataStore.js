import { createStore, applyMiddleware } from "redux";
import {ShopReducer} from "./ShopReducer";
import {CommonReducer} from "./CommonReducer";
import {CartReducer} from "./CartReducer";
import { asyncActions } from "./AsyncMiddleware";

export const DapaShirtsDataStore = createStore(CommonReducer(ShopReducer, CartReducer), applyMiddleware(asyncActions));