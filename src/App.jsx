import UserCard from './components/UserCard'
import SkeletonCard from './components/SkeletonCard'
import { useState, useEffect } from 'react'
// import './App.css'
import { Box, Skeleton, Stack } from '@mui/material'
import useGetUsers from './hooks/useGetUsers'

function App() {
  const users = useGetUsers();
  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'space-around', gap: '1rem', width: '90vw', mx:'auto', flexWrap: 'wrap', alignItems: 'center'}}>
        {
          users ? users.map(user => <UserCard key={user.id} user={user} />) : 
          <SkeletonCard />
        }
      </Box>
    </>
  )
}

export default App
