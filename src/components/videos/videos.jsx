import { Stack, Box } from '@mui/material'
import React from 'react'
import {Loader, VideoCard, VideoChannel } from '../'

const Videos = ({videos}) => {
  if (!videos.length) return(<Loader />)
    
  return (
    <Stack 
    width={'100%'}
    direction={'row'}
    flexWrap='wrap'
    justifyContent='start'
    alignItems='start'
    gap={2}>
        {videos.map((item, idx)=>(
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <VideoChannel video={item}/>}
          </Box>
        ))}
    </Stack>
  )
}

export default Videos   