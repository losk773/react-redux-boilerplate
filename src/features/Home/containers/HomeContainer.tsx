import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/common/redux';

import { fetchUsers, selectHome } from '../redux/home.slice';

export const HomeContainer = () => {
  const { users, loading } = useAppSelector(selectHome);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <h3>
        <Link to={'/counter'}>Counter Page</Link>
      </h3>
      {!loading ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
