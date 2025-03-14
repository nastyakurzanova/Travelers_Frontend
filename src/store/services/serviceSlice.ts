import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	service: undefined,
};

const serviceSlice = createSlice({
	name: 'service',
	initialState: initialState,
	reducers: {
		updateService(state, action) {
			state.service = action.payload
		},
		updateName(state, action) {
			state.service.name = action.payload
		},
		updateDescription(state, action) {
			state.service.description = action.payload
		},
		updatePrice(state, action) {
			state.service.price = action.payload
		},
		updateImage(state, action) {
			state.service.image = action.payload
		}
	}
})

export const {
	updateService,
	updateName,
	updateDescription,
	updatePrice,
	updateImage
} = serviceSlice.actions;

export default serviceSlice.reducer;