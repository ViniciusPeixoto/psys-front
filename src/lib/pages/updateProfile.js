import React, { useState } from 'react';
import { addProfile, patchProfile } from '../components/api';
import { Form, Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const UpdateProfilePage = () => {
    const location = useLocation()
    const { isEdit, profile, userId } = location.state || {}

    const [about, setAbout] = useState(profile ? profile.about : '');

    const handleInputChange = (event) => {
        setAbout(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const profileData = {
            user_id: userId,
            about: about
        }

        try{
            const response = isEdit
            ? await patchProfile(profile.id, profileData)
            : await addProfile(profileData)

            if (!response.ok) {
                throw new Error('Failed to set user profile')
            }
        } catch (error) {
            console.error('Error setting user profile:', error)
        }
    }

    return (
        <Container className='mt-5'>
            <h2>{isEdit ? 'Update' : 'Create'} Profile</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='about'>
                    <Form.Label>About</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={10}
                        value={about}
                        onChange={handleInputChange}
                        placeholder='Say something about you...'
                    />
                </Form.Group>
                <Button variant='primary' type='submit' className='mt-3'>
                    {isEdit ? 'Update' : 'Create'} Profile
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateProfilePage;