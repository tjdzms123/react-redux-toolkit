import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersAsync, incrementAsync } from './counterSlice';
import { useAppDispatch } from '../../app/hooks';

const Test = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(fetchUsersAsync());
    // const promise = dispatch(incrementAsync(10));

    return () => {
      promise.abort();
    };
  }, []);

  return <div>Test</div>;
};

export default Test;
