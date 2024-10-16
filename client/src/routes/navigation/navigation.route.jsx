import { Fragment, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import {
    MainContainer,
    NavigationContainer,
    NavigationWrapper,
    NewsSections,
} from "./navigation.styles"
import { newsSections } from "../../constants/news-sections"
import Dropdown from "../../components/UI/Dropdown/dropdown.component"
import { Button } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import AuthenticationModal from "../../components/authentication/authentication.component"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { signOutStart } from "../../store/user/user.action"

const Navigation = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const lenguage = "es";

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const getNewsSections = (language = "en") => {
        const sections = newsSections.find(
            (section) => section.language === language
        ).sections
        return sections;
    }

    return (
        <Fragment>
            <NavigationContainer>
                <NavigationWrapper>
                    <h1 onClick={() => navigate("/")}>NEWS</h1>
                    <NewsSections>
                        <Dropdown
                            title={lenguage === "es" ? "Categorias" : "Categories"}
                            options={getNewsSections(lenguage)}
                        />
                        {currentUser ? (
                            <Button
                                onClick={() => dispatch(signOutStart())}
                                variant="outlined"
                                startIcon={<PersonIcon />}
                                color="white"
                            >
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <Button
                                onClick={openModal}
                                variant="outlined"
                                startIcon={<PersonIcon />}
                                color="white"
                            >
                                Iniciar Sesión
                            </Button>
                        )}
                        <AuthenticationModal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                        />
                    </NewsSections>
                </NavigationWrapper>
            </NavigationContainer>
            <MainContainer>
                <Outlet />
            </MainContainer>
        </Fragment>
    )
}

export default Navigation
