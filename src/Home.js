import React, { useEffect, useState } from "react"

import {BrowserRouter , Router, Route, Routes, NavLink} from "react-router-dom"


const Home = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      <div >
  <nav className="navbar navbar-expand-lg">
  <img  width={50} className="icon" src="./2061107.png" />
    <a className="navbar-brand" > TV Shows</a>
  </nav>

</div>

   <table className="my-table">
    <tr>
      <td className="HName">Name</td>
      <td className="HName">Type</td>
      <td className="HName">Language</td>
      <td className="HName">Genres</td>
      <td>
        Click here to Know More
      </td>
    </tr>
    {
      users.map((item)=>
      <tr>
      <td className="Name">{item.show.name}</td>
      <td className="type">{item.show.type}</td>
      <td className="language">{item.show.language}</td>
      <td className="Genres">{item.show.genres}</td>
      <td><NavLink
              to="/Summary"
              className="navbar-link "
              onClick={() => <summary></summary>}>
              <button>
                Click here for summary
              </button>
            </NavLink></td>
      </tr>)
    }
   </table>
    
    </div>
  );
}

export default Home;