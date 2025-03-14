import "./ServiceEditPage.sass"
import {useParams, useNavigate} from "react-router-dom";
import {useService} from "../../hooks/services/useService";
import React, {useEffect, useState} from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomTextarea from "../../components/CustomTextarea/CustomTextarea";
import CustomButton from "../../components/CustomButton/CustomButton";
import {api} from "../../utils/api";
import {useToken} from "../../hooks/users/useToken";
import UploadButton from "../../components/UploadButton/UploadButton";
import {variables} from "../../utils/consts";

const ServiceEditPage = () => {

    const navigate = useNavigate()

    const {access_token} = useToken()

    const { id } = useParams<{id: string}>();

    const {
        service,
        fetchService,
        setName,
        setDescription,
        setPrice,
        setImage
    } = useService()

    useEffect(() => {
        id && fetchService(id)
    }, [])

    const [img, setImg] = useState<File | undefined>(undefined)

    const handleFileChange = (e) => {
        if (e.target.files) {
            const img = e.target?.files[0]
            setImg(img)
            setImage(URL.createObjectURL(img))
        }
    }

    const saveService = async() => {
        let form_data = new FormData()

        form_data.append('name', service.name)
        form_data.append('description', service.description)
        form_data.append('price', service.price)

        if (img != undefined) {
            form_data.append('image', img, img.name)
        }

        const response = await api.put(`services/${service.id}/update/`, form_data, {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': access_token
            }
        })

        if (response.status == 200) {
            setImg(undefined)
            navigate("/services/")
        }
    }

    const deleteService = async () => {

        const response = await api.delete(`services/${service.id}/delete/`, {
            headers: {
                'authorization': access_token
            }
        })

        if (response.status == 200) {
            setImg(undefined)
            navigate("/services/")
        }

    }

    if (id == undefined) {
        return (
            <div>

            </div>
        )
    }

    if (service == undefined) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className="edit-page-wrapper">

            <div className="left">

                <img src={service.image} alt=""/>

                <UploadButton handleFileChange={handleFileChange} />

            </div>

            <div className="right">

                <div className="info-container">

                    <CustomInput placeholder="Название" value={service.name} setValue={setName} />

                    <CustomTextarea placeholder="Адрес" value={service.description} setValue={setDescription} />

                    <CustomInput placeholder="Цена" value={service.price} setValue={setPrice} />

                    <div className="buttons-container">

                        <CustomButton bg={variables.green} onClick={saveService}>
                            Сохранить
                        </CustomButton>

                        <CustomButton bg={variables.red} onClick={deleteService}>
                            Удалить
                        </CustomButton>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceEditPage