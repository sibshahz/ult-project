import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { AppBar } from '@mui/material';
import { deleteProject } from '../../redux/projects/projects.utils';
import SnackbarInfo from '../snackbar/snackbar-info.component';

export default function Projectitem({endDate,priority,overview,team,projectTitle,status,startDate,id,callingId}) {
  async function handleDelete(){
    await deleteProject(callingId);
  }
  function handleClick(){
    return;
  }
  return (
    <>
    <Card sx={{ minWidth: 275,width:280,ml:1,mb:1,mt:1 }} className="project-item" key={id}>
   
      <CardContent>
      <CardHeader
        sx={{ 
          padding:0,
          pb:1
         }}
        action={
          <IconButton aria-label="settings" onClick={handleDelete}>
            <MoreIcon />
          </IconButton>
        }
        title={projectTitle}
        subheader={`Status: ${status}`}
      />

        <Typography variant="body2">
          {overview}
        </Typography>
        <Typography sx={{ margin: 1.5,ml:0 }} color="text.secondary">
          Priority: {priority}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Learn More</Button>
      </CardActions>
    </Card>
    </>
  )
}
