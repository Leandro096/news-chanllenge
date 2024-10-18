import { Fragment, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import {
    MainContainer,
    NavigationContainer,
    NavigationWrapper,
    NewsSections,
    MUIButton,
} from "./navigation.styles"
import { newsSections } from "../../constants/news-sections"
import Dropdown from "../../components/UI/Dropdown/dropdown.component"
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AuthenticationModal from "../../components/authentication/authentication.component"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { signOutStart } from "../../store/user/user.action"
import { buttonStyles } from "./button-styles"

const Navigation = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const getNewsSections = (language = "en") => {
        const sections = newsSections.find(
            (section) => section.language === language
        ).sections
        return sections;
    }

    const buttonHelper = () => {
        if (currentUser) {
            dispatch(signOutStart());
        } else {
            openModal();
        }
    };

    return (
        <Fragment>
            <NavigationContainer>
                <NavigationWrapper>
                    <h1 onClick={() => navigate("/")}>NEWS</h1>
                    <NewsSections>
                        <Dropdown
                            title={"Categories"}
                            options={getNewsSections("en")}
                        />
                        <MUIButton
                            onClick={buttonHelper}
                            variant="outlined"
                            sx={buttonStyles}
                        >
                            {currentUser ? <LogoutIcon /> : <PersonIcon />}
                            <span>
                                {!currentUser ? "Sign In" : "Sign Out"}
                            </span>
                        </MUIButton>
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
