import { createStore,applyMiddleware } from "redux"
import rootReducer from "../reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"


export default function initStore(){
    const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(logger,thunk)))
    return store;
}