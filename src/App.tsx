import React, { useEffect, useState } from 'react';
import { Card, CardVariant } from './components/Cart';
import axios from 'axios'
import List from './components/List';
import { UserItem } from './components/UserItem';
import TodoItem from './components/TodoItem'
import { EventsExample } from './components/EventsExample';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { UserPage } from './components/UserPage';
import { TodosPage } from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

function App() {
	return (
		<BrowserRouter>
			<div>
				<div>
					<NavLink to='/users'>Пользователи</NavLink>
					<NavLink to='/todos'>Список дел</NavLink>
				</div>
				<Route path={'/users'} exact>
					<UserPage />
				</Route>
				<Route path={'/todos'} exact>
					<TodosPage />
				</Route>				<Route path={'/users/:id'}>
					<UserItemPage />
				</Route>				<Route path={'/todos/:id'}>
					<TodoItemPage />
				</Route>
			</div>
		</BrowserRouter>
	);
}

export default App;

