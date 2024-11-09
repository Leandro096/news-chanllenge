import { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { signUpStart, emailSignInStart } from '../../store/user/user.action';
import { selectIsUserLoading } from "../../store/user/user.selector"

import {
    Overlay,
    ModalContainer,
    TabButtonWrapper,
    TabButton,
    Form,
    Input,
    SubmitButton,
    SwitchText,
} from './authentication.styles';
import Spinner from '../spinner/spinner.component';
import { toast } from 'sonner';

const defaultFields = {
    name: '',
    password: '',
    email: '',
    language: '',
    confirmPassword: '',
}

const AuthenticationModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsUserLoading);

    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData] = useState(defaultFields);

    const { email, password, confirmPassword, name, language } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignIn) {
            dispatch(emailSignInStart({ email, password }));
            toast.success("Welcome back!");
        } else if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        } else {
            dispatch(signUpStart({ email, password, name, language }));
            toast.success("Welcome to News Challenge!");
        }

        setFormData(defaultFields);

        onClose();
    };

    const disabled = isSignIn ? !email || !password : !email || !password || !name || !language || !confirmPassword;

    if (!isOpen) return null;

    return (
        <>
            <Overlay onClick={onClose} />
            <ModalContainer>
                <TabButtonWrapper>
                    <TabButton active={isSignIn} onClick={() => setIsSignIn(true)}>
                        Sign In
                    </TabButton>
                    <TabButton active={!isSignIn} onClick={() => setIsSignIn(false)}>
                        Sign Up
                    </TabButton>
                </TabButtonWrapper>

                <Form onSubmit={handleSubmit}>
                    {!isSignIn && (
                        <>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="text"
                                name="language"
                                placeholder="Languaje"
                                value={language}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    <Input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    {!isSignIn && (
                        <Input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmar contraseña"
                            value={confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <SubmitButton type="submit" disabled={disabled || isLoading} >
                        {isLoading ? <Spinner /> : isSignIn ? 'Iniciar Sesión' : 'Registrarme'}
                    </SubmitButton>
                </Form>

                <SwitchText onClick={() => setIsSignIn(!isSignIn)}>
                    {isSignIn ? 'Need to create an account? Sign Up' : 'Already have an account? Sign In'}
                </SwitchText>
            </ModalContainer>
        </>
    );
};

AuthenticationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AuthenticationModal;
