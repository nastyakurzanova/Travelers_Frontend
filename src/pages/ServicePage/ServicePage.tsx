import "./ServicePage.sass"
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useService} from "../../hooks/services/useService";

const ServicePage = () => {

    const { id } = useParams<{id: string}>();
    
    const {service, fetchService} = useService()
    
    useEffect(() => {
        id && fetchService(id)
    }, [])

    if (service == undefined) {
        return (
            <div>

            </div>
        )
    }

    const img = `http://127.0.0.1:8000/api/services/${id}/image/`

    return (
        <div className="page-details-wrapper">

            <Link className="return-link" to="/">
                Назад
            </Link>

            <div className="left">

                <img src={img}  alt=""/>

            </div>

            <div className="right">

                <div className="info-container">

                    <h2>{service.name}</h2>

                    <br />

                    <span>Описание: {service.description}</span>

                    <br />

                    <span>Цена: {service.price} рублей</span>

                </div>

            </div>

        </div>
    )
}

export default ServicePage;