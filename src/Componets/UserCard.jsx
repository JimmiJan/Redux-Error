import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../NEwStore/Action/getProfile';
import Card from './Card'
import UserNotFound from './userNotFound';

const UserCard = ({inputvalue}) => {


    const { userData, userDataLoading, userDataError } = useSelector((state) => state.getProfileReducer
      );
      console.log(userDataError, "error")

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfile(inputvalue))
    },[inputvalue])

    const { avatar_url, name, followers, following, public_repos } = userData;
  return (
    <div>
      {userDataLoading}?(
          <h1>Loading...</h1>
      ) :userDataError ?(
          <UserNotFound />
      ) :(
          <Card 
          avatar_url={avatar_url}
          name={name}
          followers={followers}
          following={following}
          public_repos={public_repos}
          />
      )
    </div>
  )
}

export default UserCard
