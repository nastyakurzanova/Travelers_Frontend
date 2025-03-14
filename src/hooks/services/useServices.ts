import {useDispatch, useSelector} from 'react-redux';
import {
	updateServices,
	updateQuery
} from "../../store/services/servicesSlice";
import {api} from "../../utils/api";
import {useOrder} from "../orders/useOrder";
import {useToken} from "../users/useToken";

export function useServices() {
	const services = useSelector(state => state.services.services);
	const query = useSelector(state => state.services.query);

	const {access_token} = useToken()

	const {fetchOrder} = useOrder()

	const dispatch = useDispatch()

	const setServices = (value) => {
		dispatch(updateServices(value))
	}

	const setQuery = (value) => {
		dispatch(updateQuery(value))
	}

	const searchServices = async () => {

		const {data} = await api.get(`services/search`, {
			params: {
				query: query
			},
			headers: {
				'authorization': access_token
			}
		})

		// const draft_order_id = data["draft_order_id"]
		// draft_order_id && fetchOrder(draft_order_id)

		return data["services"]
	}

	return {
		services,
		setServices,
		query,
		setQuery,
		searchServices
	};
}