import {configureStore} from "@reduxjs/toolkit";

import serviceReducer from "./services/serviceSlice"
import draftOrderReducer from "./orders/orderSlice"
import authReducer from "./users/authSlice"
import ordersReducer from "./orders/ordersSlice"
import servicesReducer  from "./services/servicesSlice"

export default configureStore({
	reducer: {
		service: serviceReducer,
		services: servicesReducer,
		order: draftOrderReducer,
		orders: ordersReducer,
		user: authReducer
	}
});