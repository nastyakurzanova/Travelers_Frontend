import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	order: undefined
};

const orderSlice = createSlice({
	name: 'order',
	initialState: initialState,
	reducers: {
		updateOrder(state, action) {
			state.order = action.payload
		}
	}
})

export const {updateOrder} = orderSlice.actions;

export default orderSlice.reducer;