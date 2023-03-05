import React from 'react'
import { Link } from 'react-router-dom'
// import General from '../components/Asadbek/Asadbek'

export default function Users() {
    return (
        <div>
            {/* <General/> */}
            <Link to="/asadbek">
                <button>Asad</button>
            </Link>
            <button>Behruz</button>
            <button>Xurshid</button>
            <button>Sanjar</button>
            <button>Doston</button>
            <button>Samandar</button>
            <button>Abdumurod</button>
        </div>
    )
}
