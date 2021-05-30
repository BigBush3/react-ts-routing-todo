import React, { useEffect, useState } from 'react'
import { IUser } from '../types/types'
import List from './List'
import { UserItem } from './UserItem'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export const UserPage: React.FC = () => {

	const [users, setUsers] = useState<IUser[]>([])
	const history = useHistory()

	useEffect(() => {
		fetchUsers()
	}, [])

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}
	return (
		<List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => history.push('/users/' + user.id)} user={user} key={user.id} />} />
	)
}
