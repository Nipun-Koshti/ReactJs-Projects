import React from 'react'

const user = [
    {id:1, name:"Alice", age: 20},
    {id:2, name:"Bob", age: 22},
    {id:3, name:"Jhon", age: 23},
]
const UserList = () => {
  return (
    <div>
      {user.map(user => (
        <ul key={user.id}>
            <li>{user.name}</li>
            <li>{user.age}</li>
        </ul>
      ))}
    </div>
  )
}

export default UserList
