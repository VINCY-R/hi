import { GoSearch } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Header.css'; 
import { useState } from "react";
import { useGlobal } from "../context/global";

function Header({ setRendered }) {
    const { searchGiffs } = useGlobal();
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGiffs(query);
        setRendered('search');
        setQuery('');

        if(query===''){
            setRendered('trending')
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="App">
            <Container className="header-container">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" width="40" height="40">
                        <g fillRule="evenodd" clipRule="evenodd">
                            <path fill="#00ff99" d="M0 3h4v29H0z"></path>
                            <path fill="#9933ff" d="M24 11h4v21h-4z"></path>
                            <path fill="#00ccff" d="M0 31h28v4H0z"></path>
                            <path fill="#fff35c" d="M0 0h16v4H0z"></path>
                            <path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path>
                            <path className="shadow" d="M24 16v-4h4M16 0v4h-4"></path>
                        </g>
                    </svg>
                </div>
                <div className="text">
                    <span>GIPHY GIFT APP</span>
                </div>
            </Container>

            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEntry">
                        <div className="input-container">
                            <Form.Control
                                type="text"
                                placeholder="Enter a keyword to search"
                                style={{ color: 'black' }}
                                value={query}
                                onChange={handleChange}
                            />
                            <Button type="submit" variant="primary" className="search-button"><GoSearch /></Button>
                        </div>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default Header;
