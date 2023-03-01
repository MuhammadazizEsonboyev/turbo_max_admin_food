import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css'


function App() {
  const [value, setValue] = useState("")
  const [data, setData] = useState("")

  const handleClick = () => {
    alert("Hello world")
  }


  const get_data = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setData(data?.data)
      })
  }


  useEffect(() => {
    get_data()
  }, [])

  return (
    <>

      <div className="click">
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>onSubmit</button>
      </div>

        {/* {data.map((user) => {
          return (
            <>
              <p>{user.name}</p>
            </>
          )
        })} */}
    </>
  );
}

export default App;
