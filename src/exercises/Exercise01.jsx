import React, {useEffect, useState} from 'react';
import axios from 'axios'

const TOTAL_USERS = 6

const Exercise01 = () => {
  const [users, setUsers] = useState([])

  /* THE FIX STARTS HERE */
  
  /*
  NOTE
  -------
  You can get the first 10 users by hitting https://jsonplaceholder.typicode.com/users.
  For this exercise, assume that that option is NOT available and that you can only
  use the https://jsonplaceholder.typicode.com/users?id=n URL (if we need to render
  5 users, then we need to hit the URL 5 times).
  */

  //////////////////////////>>  STEP BY STEP <<//////////////////////////////
  //                                                                       //
  //  1- First I change the content of the useEffect to a new function.    //
  //  2- The function is async.                                            //
  //  3- I declare an array where I will save the users                    //
  //  4- I wait the responsive and make a push in the array                //
  //  5- And the last things I do is set the array to the state 'users'    //
  //                                                                       //
  ///////////////////////////////////////////////////////////////////////////

  const searchUsers =  async () => {
    const arrayUsers = []
    for(var i = 1; i < TOTAL_USERS; i++) {
      
      ////>> [x] SOLUTION WITH FETCH <<////
      // We fetch the user
      /*const res = await fetch('https://jsonplaceholder.typicode.com/users?id=' + i)
        .then(r => r.json()) // converts response to obj
        .then(user => user[0]) // maps [{..}] to {..} since the API provides an array*/
        
      ////>> [x] SOLUTION WITH AXIOS <<////
      const res = await axios('https://jsonplaceholder.typicode.com/users?id=' + i)
        .then(res => res.data[0])

      arrayUsers.push(res)
    }

    setUsers(arrayUsers) 
  }

  useEffect(() => { 
    searchUsers()
  }, [])

  /* THE FIX ENDS HERE */

  return (
    <div className="container">
      <h2>Instructions</h2>
      <p>We are currently trying to render the first 5 users we obtain from a REST API. The problem is that, for some reason, it's only rendering one of them. Another thing we've noticed is that, sometimes, it renders different user.</p>

      <div>
        <strong>TODO:</strong>
        <ul>
          <li>Fetch and Render the first 5 users</li>
          <li>Make sure the order is ascendant by ID</li>
        </ul>
      </div>

      <hr className="my-5" />

      <h3>Users</h3>

      <ul className="list-group">
        {users.map(user => <li key={`user-${user.id}`} className="list-group-item">
          <strong>ID:</strong> {user.id} - <strong>Name:</strong> {user.name} <strong>Email:</strong> {user.email}
        </li>)}
      </ul>

    </div>
  );
};

export default Exercise01;
