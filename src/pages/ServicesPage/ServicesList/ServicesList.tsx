import "./ServicesList.sass"
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import {useServices} from "../../../hooks/services/useServices";
import {useQuery} from "react-query";
import ServicesFilters from "../ServicesFilters/ServicesFilters";

const ServicesList = () => {

    const {searchServices} = useServices()

    const { isLoading, data, refetch } = useQuery(
        ["services"],
        () => searchServices(),
        {
            keepPreviousData: false,
        }
    )

    if (isLoading) {
        return (
            <div>

            </div>
        )
    }

    const cards = data.map(service  => (
        <ServiceCard service={service} key={service.id}/>
    ))

    return (
        <div className="services-list-wrapper">

            <ServicesFilters refetch={refetch}/>

            <div className="services-list">
                { cards }
            </div>

        </div>
    )
}

export default ServicesList;