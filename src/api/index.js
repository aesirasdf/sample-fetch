import { URL, USERS } from './apiConstants'
export const UserIndex = async () => {
    const response = await fetch(`${URL}${USERS}`)
    const json = await response.json()
    return json
}