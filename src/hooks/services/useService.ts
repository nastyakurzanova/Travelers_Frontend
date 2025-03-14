import {useDispatch, useSelector} from 'react-redux';
import {
	updateService,
	updateName,
	updateDescription,
	updatePrice,
	updateImage
} from "../../store/services/serviceSlice";
import {api} from "../../utils/api";

export function useService() {
	const service = useSelector(state => state.service.service);

	const dispatch = useDispatch()

	const setService = (value) => {
		dispatch(updateService(value))
	}

	const setName = (value) => {
		dispatch(updateName(value))
	}

	const setDescription = (value) => {
		dispatch(updateDescription(value))
	}

	const setPrice = (value) => {
		dispatch(updatePrice(value))
	}

	const setImage = (value) => {
		dispatch(updateImage(value))
	}

	const fetchService = async (id) => {

		const {data} = await api.get(`services/${id}`);

		setService(data)

	};

	return {
		service,
		setService,
		fetchService,
		setName,
		setDescription,
		setPrice,
		setImage
	};
}