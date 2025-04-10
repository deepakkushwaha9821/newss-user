<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit"
import authReducer from './auth';

const store = configureStore({
    reducer:{
        auth: authReducer,
    },
});

=======
import { configureStore } from "@reduxjs/toolkit"
import authReducer from './auth';

const store = configureStore({
    reducer:{
        auth: authReducer,
    },
});

>>>>>>> 77f0b7975a4ef4138d90afd297611dd1f7e1725e
export default store;