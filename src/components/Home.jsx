import React from "react";
import { useSelector } from "react-redux";

function Home() {
    const users = useSelector((state)=>state.users);
    console.log(users);
  return (
    <div>
      <div className="container">
        <h2 className="text-center text-3xl font-bold mt-5 ">
          Simple To Do Here
        </h2>
        <div className="w-80 bg-slate-300">
          <button
            type="button"
            className="button bg-blue-700 text-white px-5 py-2 rounded-md">
            Create +
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
{
    users.map((user,index)=>{
        <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.action}</td>
        </tr>
    })
}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
