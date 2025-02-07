import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Infobox.css'

export const Infobox = ({info}) => {
    const url="https://images.unsplash.com/photo-1527666466760-f6a7a2b31176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhemV8ZW58MHx8MHx8fDA%3D"
  const hot="https://media.istockphoto.com/id/1655159361/photo/beautiful-park-with-green-lawn-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=lCnvTzl2_cUIJPmGmOs2xBy8W1B8_YIMAUG07ua3iCY="
    const rain="https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D"
    const cold="https://images.unsplash.com/photo-1435777940218-be0b632d06db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGR8ZW58MHx8MHx8fDA%3D"
  return (
    <div className='box'>
        
        <div className="card">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>70
            ?rain
            :info.temp>30
            ?hot
            :cold
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temprature:{info.temp}&deg;C</p>
          <p>Humidity:{info.humidity}</p>
          <p>Minimum Temprature:{info.tempmin}&deg;C</p>
          <p>Maximum Temprature:{info.tempmax}&deg;C</p>
        
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}
