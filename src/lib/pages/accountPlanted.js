import React, { useEffect, useState } from 'react';
import { getCurrentUser, listPlantedAccount } from '../components/api';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import { formatDateTime } from '../components/dateFormatter';

const AccountPlantedPage = () => {
    const [accounts, setAccounts] = useState([]);
    const [account, setAccount] = useState('');
    const [treesData, setTreesData] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try{
                const user_response = await getCurrentUser();
                if (!user_response.ok) {
                    throw new Error('Failed to fetch current user')
                }
                const userData = await user_response.json();
                setAccounts(userData.accounts);
            } catch (error) {
                console.error('Error fetching current user:', error)
                setLoading(false)
            }
        };

        fetchCurrentUser();
    }, []);

    useEffect(() => {
        if (account) {
            const fetchAccountData = async () => {
                setLoading(true)
                try{
                    const plantedData = await listPlantedAccount(account);
                    setTreesData(plantedData)
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching planted trees data:', error)
                    setLoading(false)
                }
            }

            fetchAccountData();
        }
    }, [account])
    
    const handleAccountChange = (event) => {
        setAccount(event.target.value);
    };

    return (
        <Container className='mt-5'>
            <h2>Your Account Planted Trees</h2>
            <Form>
                <Form.Group controlId='accountSelect'>
                    <Form.Label>Select account</Form.Label>
                    <Form.Control as='select' value={account} onChange={handleAccountChange}>
                        <option value=''>Select an account...</option>
                        {accounts.map((acc) => (
                            <option key={acc.id} value={acc.name}>
                                {acc.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
            {loading ? (
                <p>Loading trees information...</p>
            ) : treesData ? (
                <ListGroup>
                    {treesData.map((tree) => (
                        <ListGroup.Item key={tree.id}>
                            <h5>{tree.tree.name}</h5>
                            <p className='fst-italic'>{tree.tree.scientific_name}</p>
                            <p>Account: {tree.account.name}</p>
                            <p>Planted at: {formatDateTime(tree.planted_at)}</p>
                            <p>Age: {tree.age}</p>
                            <p>Location: ({tree.location[0]}, {tree.location[1]})</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                <p>No trees data to show</p>
            )}
            <Button variant='primary' href='/plant'>Plant a new tree</Button>
        </Container>
    );
};

export default AccountPlantedPage;