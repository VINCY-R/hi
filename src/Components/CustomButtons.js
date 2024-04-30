import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../styles/CustomButtons.css';

function CustomButtons({ icon, name ,onClick}) {
    return (
        <Button variant="light" className="custom-button" onClick={onClick} >
            {icon} {name}
        </Button>
    );
}

export default CustomButtons;
