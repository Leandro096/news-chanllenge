import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const TabButtonWrapper = styled.div`
    display: flex;
    border-radius: 100px;
    overflow: hidden;
`;

export const TabButton = styled.button`
    flex: 1;
    padding: 10px;
    background: ${(props) => (props.active ? '#5266A6' : '#ccc')};
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background: #3700b3;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

export const SubmitButton = styled.button`
    padding: 10px;
    background-color: #5266A6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #3700b3;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const SwitchText = styled.p`
    text-align: center;
    color: #5266A6;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;