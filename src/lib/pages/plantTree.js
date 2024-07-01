import React, { useEffect, useState } from 'react';
import { addPlanted, getCurrentUser, listTrees } from '../components/api';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PlantTreePage = () => {
    const [user, setUser] = useState(null)
    const [accounts, setAccounts] = useState([]);
    const [account, setAccount] = useState('');
    const [treesData, setTreesData] = useState([]);
    const [tree, setTree] = useState('')
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [userLoading, setUserLoading] = useState(true)
    const [treeLoading, setTreeLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try{
                const user_response = await getCurrentUser();
                if (!user_response.ok) {
                    throw new Error('Failed to fetch current user')
                }
                const userData = await user_response.json();
                setUser(userData)
                setAccounts(userData.accounts);
                setUserLoading(false)
            } catch (error) {
                console.error('Error fetching current user:', error)
            }
        };

        fetchCurrentUser();
    }, []);

    useEffect(() => {
        const fetchTrees = async () => {
            try{
                const treesData = await listTrees();
                setTreesData(treesData)
                setTreeLoading(false)
            } catch (error) {
                console.error('Error fetching trees information:', error)
            }
        };

        fetchTrees();
    }, []);
    
    const handleAccountChange = (event) => {
        const accountName = event.target.value;
        const accountObject = accounts.find(account => account.name === accountName)
        setAccount(accountObject)
    };

    const handleTreeChange = (event) => {
        const treeName = event.target.value;
        const treeObject = treesData.find(tree => tree.name === treeName)
        setTree(treeObject)
    };

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value)
    }

    const handleLongitudeChange = (event) => {
        setLongitude(event.target.value)
    }

    const loading = userLoading || treeLoading;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const plantedData = {
            user_id: user.id,
            tree_id: tree.id,
            account_id: account.id,
            latitude: latitude,
            longitude: longitude
        }
    
        try {
            const response = await addPlanted(plantedData)
            if (response.planted_at) {
                navigate('/planted')
                window.location.reload();
            }
        } catch (error){
            console.error('Error posting new tree:', error)
        }

    }

    const renderForm = () => {
        return (
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='accountSelect'>
                        <Form.Label>Select account</Form.Label>
                        <Form.Control as='select' value={account.name} onChange={handleAccountChange}>
                            <option value=''>Select an account...</option>
                            {accounts.map((acc) => (
                                <option key={acc.id} value={acc.name}>
                                    {acc.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='treeSelect'>
                        <Form.Label>Select tree</Form.Label>
                        <Form.Control as='select' value={tree.name} onChange={handleTreeChange}>
                            <option value=''>Select a tree...</option>
                            {treesData.map((tr) => (
                                <option key={tr.id} value={tr.name}>
                                    {tr.name}, {tr.scientific_name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId='latitudeInput'>
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control as={'input'} value={latitude} onChange={handleLatitudeChange} placeholder='latitude'/>
                    </Form.Group>
                    <Form.Group controlId='longitudeInput'>
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control as={'input'} value={longitude} onChange={handleLongitudeChange} placeholder='longitude'/>
                    </Form.Group>
                    <Button variant='primary' type='submit' className='mt-3'>
                        Plant tree
                    </Button>
                </Form>
            </Container>
        )
    }

    return (
        <Container className='mt-5'>
            <h2>Plant a new Tree</h2>
            {loading ? (
                <p>Loading data...</p>
            ) : (
                renderForm()
            )}
        </Container>
    );
};

export default PlantTreePage;