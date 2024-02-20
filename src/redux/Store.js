import {configureStore} from '@reduxjs/toolkit';
import appConfigReducer from '../redux/slice/appConfigSlice'


export default configureStore({
    reducer:{
         appConfigReducer
    }
})