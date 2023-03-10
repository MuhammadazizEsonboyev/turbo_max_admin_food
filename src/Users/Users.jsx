import React from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  return (
    <div>
        <Link to="/muhammadaziz">
            <button>Muhammadaziz</button>
        </Link>
        <Link to="/asadbek">
            <button>Asadbek</button>
        </Link>
        <Link to="/samandar">
            <button>Samandar</button>
        </Link>
        <Link to="/doston-sila">
            <button>Doston</button>
        </Link>
        <Link to="/behruz-axi">
            <button>Behruz</button>
        </Link>
        <Link to="/xurshid-sila">
            <button>Xurshid</button>
        </Link>
    </div>
  )
}
