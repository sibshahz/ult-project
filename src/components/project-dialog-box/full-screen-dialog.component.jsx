import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [projectDetails,setProjectDetails]=useState({projectTitle:'',startDate:'',endDate:'',overview:'',priority:'',status:'',team:''});
  const {projectTitle,startDate,endDate,overview,priority,status,team}=projectDetails;

  const handleChange=event =>{
  const {value, name}=event.target;
    setProjectDetails({...projectDetails,[name]: value});
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
      <IconButton
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              m:1,
              width:128,
              height:128,
             }}
            size="large"
            edge="end"
            color="inherit"
            title="Add Project"
            aria-label="addproject"
            onClick={handleClickOpen}
        >
          <AddIcon color="action" fontSize="large" />
            
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add New Project
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
          <TextField
            value={projectTitle}
            name='projectTitle'
            label="Project Title"
            className="outlined-size-small"
            size="small"
            onChange={handleChange}
          />
          <label>Start date:</label>
          <input type="date" id="startDate" value={startDate} name="startDate" onChange={handleChange}></input>

          <label>End date:</label>
          <input type="date" id="endDate" value={endDate} name="endDate" onChange={handleChange}></input>

          </ListItem>
          <Divider />
          
          <ListItem>
            <TextareaAutosize
              name='overview'
              value={overview}
              aria-label="minimum height"
              minRows={6}
              onChange={handleChange}
              placeholder="Project Overview"
              style={{ width: 400 }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel className="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className="demo-simple-select"
              name='priority'
              label="Priority"
              value={priority}
              autoWidth
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Red</MenuItem>
              <MenuItem value={20}>Blue</MenuItem>
              <MenuItem value={30}>Yellow</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel className="demo-simple-select-label">Status</InputLabel>
            <Select
              name='status'
              value={status}
              labelId="demo-simple-select-label"
              className="demo-simple-select"
              label="Priority"
              autoWidth
              onChange={handleChange}
            >
              <MenuItem value={0}>Starting soon</MenuItem>
              <MenuItem value={10}>In Progress</MenuItem>
              <MenuItem value={20}>Completed</MenuItem>
              <MenuItem value={30}>Overdue</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel className="demo-simple-select-label">Team</InputLabel>
            <Select
              name="team"
              labelId="demo-simple-select-label"
              className="demo-simple-select"
              value={team}
              label="Priority"
              autoWidth
              onChange={handleChange}
            >
              <MenuItem value={10}>React team</MenuItem>
              <MenuItem value={10}>Design Team</MenuItem>
              <MenuItem value={20}>Developer Team</MenuItem>
              <MenuItem value={30}>QA Team</MenuItem>
            </Select>
          </FormControl>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
