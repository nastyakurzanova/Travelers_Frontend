import "./ServicesPage.sass"
import {useAuth} from "../../hooks/users/useAuth";
import ServicesList from "./ServicesList/ServicesList";
import ServicesTableWrapper from "./ServicesTableWrapper/ServicesTableWrapper";

const ServicesPage = () => {

    const {is_moderator} = useAuth()

    return (
        <div className="services-wrapper">

            {!is_moderator && <ServicesList />}
            {is_moderator && <ServicesTableWrapper />}

        </div>
    )
}

export default ServicesPage;