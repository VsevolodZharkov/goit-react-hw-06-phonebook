// import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { creatStore, combineReducers } from 'redux'
import {Reduser} from './reduser'
const rootReducer = combineReducers({
	contacts: Reduser
	// devTools: process.env.NODE_ENV === 'development',
})
const store = creatStore( rootReducer, composeWithDevTools());

export default store;