import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	services: [],
	query: ""
};

const servicesSlice = createSlice({
	name: 'services',
	initialState: initialState,
	reducers: {
		updateServices(state, action) {
			state.services = action.payload
		},
		updateQuery(state, action) {
			state.query = action.payload
		}
	}
})

export const {
	updateServices,
	updateQuery
} = servicesSlice.actions;

export default servicesSlice.reducer;