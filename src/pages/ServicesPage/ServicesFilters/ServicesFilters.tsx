import "./ServicesFilters.sass"
import SearchBar from "../../../components/SearchBar/SearchBar";
import {useServices} from "../../../hooks/services/useServices";
import {useAuth} from "../../../hooks/users/useAuth";
import LinkButton from "../../../components/LinkButton/LinkButton";
import {variables} from "../../../utils/consts";
import CustomButton from "../../../components/CustomButton/CustomButton";

const ServicesFilters = ({refetch}) => {

    const {is_moderator} = useAuth()

    const {query, setQuery} = useServices()

    const handleSubmit = (e) => {
        e.preventDefault()
        refetch()
    }

    return (
        <div className="services-filters">

            <h2>Поиск сервисов</h2>

            <div className="right-container" >

                {is_moderator &&
                    <LinkButton to="/services/add" bg={variables.primary}>
                        Добавить сервис
                    </LinkButton>
                }

                <form className="search-form" onSubmit={handleSubmit}>

                    <SearchBar query={query} setQuery={setQuery} placeholder={"Поиск..."} />

                    <CustomButton bg={variables.primary} >
                        Применить
                    </CustomButton>

                </form>

            </div>
        </div>
    )
}

export default ServicesFilters