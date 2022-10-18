import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@/common/redux';

import { selectHome } from '../redux/home.selectors';
import { fetchUserById } from '../redux/home.slice';

export const HomeDetailsContainer = () => {
  const { userDetails, loading } = useSelector(selectHome);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (!userDetails) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>
        {userDetails.name} | {userDetails.username}
      </h2>
      <p>{userDetails.email}</p>
      <p>{userDetails.phone}</p>
    </div>
  );
};
