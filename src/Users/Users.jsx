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
    </div>
  )
}
