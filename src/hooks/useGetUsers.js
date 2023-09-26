import { useEffect, useState } from "react";
import { UserIndex } from '../api'

const useGetUsers = () => {
  const [users, setUsers] = useState(null);
  
  const refreshUsers = () => {
    const userIndex = UserIndex()
    userIndex.then(json => {
      setUsers(json)
    })
  }

  useEffect(refreshUsers)
  return users
}

export default useGetUsers