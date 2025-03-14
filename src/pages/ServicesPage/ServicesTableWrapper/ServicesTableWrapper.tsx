import {useServices} from "../../../hooks/services/useServices";
import {useQuery} from "react-query";
import ServicesTable from "./ServicesTable/ServicesTable";

const ServicesTableWrapper = () => {

    const {searchServices} = useServices()

    const { isLoading, data, isSuccess, refetch } = useQuery(
        ["services"],
        () => searchServices(),
        {
            keepPreviousData: true,
        }
    )

    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <ServicesTable isLoading={isLoading} data={data} isSuccess={isSuccess} refetch={refetch} />
        </div>
    )
}

export default ServicesTableWrapper