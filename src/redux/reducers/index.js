import { combineReducers } from 'redux';

import sneakers from './sneakerReducer'
import brands from './brandReducer'


export default combineReducers({

    sneakers,
    brands
       
})
