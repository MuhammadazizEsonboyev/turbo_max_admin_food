import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
// import General from '../components/Asadbek/Asadbek'
>>>>>>> 81829b3 (asadbek)

export default function Users() {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "100px", gap: "20px"}}>

            <Link to="/asadbek">
                <Button variant="success">Asadbek</Button>
            </Link>
            <Link to="/doston">
                <Button variant="success">Doston</Button>
            </Link>
            <Link to="/behruz">
                <Button variant="success">Behruz</Button>
            </Link>
        </div>
    )
}
