import './Users.css'

export default function Users () {

  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  const userItems = users.map((user) => <div key={user.id} className="user">{user.name}</div>)

  return (
    <div className="map-title">
      MAP USERS
      <div className="users">User Names: {userItems}</div>
    </div>
  )

}