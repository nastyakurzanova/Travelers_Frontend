import "./ServiceCard.sass"
import {Service} from "../../utils/types";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/users/useAuth";
import {useOrder} from "../../hooks/orders/useOrder";
import CustomButton from "../CustomButton/CustomButton";
import {variables} from "../../utils/consts";
import { useServices } from "../../hooks/services/useServices";

const ServiceCard = ({ service }: {service:Service}) => {
    
    const {is_authenticated, is_moderator} = useAuth()

    const {searchServices} = useServices()

    const {order, is_draft, addServiceToOrder, deleteServiceFromOrder} = useOrder()

    const handleAddService = (e) => {
        e.preventDefault()
        addServiceToOrder(service)
        searchServices()
    }

    const handleDeleteService = (e) => {
        deleteServiceFromOrder(service)
    }

    const is_chosen = order?.services.find(g => g.id == service.id)

    return (
        <div className="card-wrapper">

            <div className="preview">
                <img src={service.image}  alt=""/>
            </div>

            <div className="card-content">

                <div className="content-top">

                    <h3 className="title"> {service.name} </h3>

                </div>

                <div className="content-bottom">

                    <Link to={`/services/${service.id}`}>
                        <CustomButton bg={variables.primary}>
                            Подробнее
                        </CustomButton>
                    </Link>
                    
                    {is_authenticated && !is_chosen && !is_moderator && location.pathname.includes("services") &&
                        <CustomButton onClick={handleAddService} bg={variables.green}>Добавить</CustomButton>
                    }

                    {is_authenticated && is_chosen && location.pathname.includes("services") &&
                        <CustomButton onClick={handleDeleteService} bg={variables.red} >Удалить</CustomButton>
                    }

                    {is_authenticated && !is_moderator && is_draft && location.pathname.includes("orders") &&
                        <CustomButton onClick={handleDeleteService} bg={variables.red}>Удалить</CustomButton>
                    }

                </div>

            </div>

        </div>
    )
}

export default ServiceCard;