import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { getLogin } from '../components/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginState, setLoginState] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoginState('')
        const credentials = {
            username: username,
            password: password,
        }

        const response = await getLogin(credentials);
        if (!(response.ok)) {
            setLoginState('Incorrect credentials.');
            return
        }
        navigate('/')
    }

    return (
        <Container className='mt-5'>
            <Form onSubmit={handleSubmit} className='p-4 border rounded shadow-sm'>
                <h3 className='mb-4'>Login</h3>
                <Form.Group className='mb-3' controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' placeholder='Enter username' onChange={(event) => setUsername(event.target.value)}/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)}/>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Log in
                </Button>
            </Form>
            <p color='red'>{loginState}</p>
        </Container>
    );
};

export default LoginPage;