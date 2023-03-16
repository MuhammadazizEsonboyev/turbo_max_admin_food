import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Users() {
    return (
        <div style={{display: "flex", justifyContent: "center", marginTop: "100px", gap: "20px"}}>

            <Link to="/asadbek">
                <Button variant="success">Asadbek</Button>
            </Link>
            <Link to="https://6412e3f5a5d3a3000824d010--mellow-arithmetic-063e7a.netlify.app/">
                <Button variant="success">Doston</Button>
            </Link>
            <Link to="/behruz-axi">
                <Button variant="success">Behruz</Button>
            </Link>
            <Link to="/samandar">
                <Button variant="success">samandar</Button>
            </Link>
            <Link to="https://xurshid-figma.netlify.app/">
                <Button variant="success">Xurshid</Button>
            </Link>
            <Link to="/bobur">
                <Button variant="success">Bobur</Button>
            </Link>
        </div>
    )

}
