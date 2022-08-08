import React,{useState,useEffect} from 'react';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import { setProjectData,setProjectsData } from '../../redux/projects/projects.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentProjects } from '../../redux/projects/projects.selectors';
import { IconPlus } from '@tabler/icons';

import { Drawer, useMantineTheme,Card } from '@mantine/core';

import AddProject from '../add-project/add-project.component';
import './full-screen-dialog.styles.css';


function FullScreenDialog({setProjectData,setProjectsData,currentProjects,currentUser}) {
  const [open, setOpen] = React.useState(false);
  const [projectDetails,setProjectDetails]=useState({projectTitle:'',startDate:'',endDate:'',overview:'',priority:'',status:'',team:''});
  const {projectTitle,startDate,endDate,overview,priority,status,team}=projectDetails;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const handleChange=event =>{
  const {value, name}=event.target;
    setProjectDetails({...projectDetails,[name]: value});
  };
  const handleClickOpen = async () => {
    
    setOpen(true);

  };

  const handleClose = async () => {
    console.log("CURRENT USERT TO SAVE IS: ",currentUser.id);
    await setProjectData({...projectDetails,userId:currentUser.id});
    console.log("SAVE WAS CALLED");
    setOpen(false);
  };

 

  return (
    <>
     <Drawer
     id='project-add-drawer'
     sx={{ 
      overflow:'auto'
      }}
     className='project-add-drawer'
      opened={opened}
      onClose={() => setOpened(false)}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      position="bottom"
       size="100%"
       lockScroll={true}
      overlayOpacity={0.55}
      overlayBlur={3}

      
    >
      
      <AddProject setOpened={setOpened} />
      
    </Drawer>
    <Card className="add-project-box" onClick={() => setOpened(true)} shadow="sm" p="lg" radius="md" withBorder={false} 
      sx={{ margin:8,minWidth:320,maxWidth:320,textAlign:'center', minHeight:410,
      display:'flex', alignItems:'center',justifyContent:'center'}}>
    <IconPlus>Add new project</IconPlus>
    </Card>

      
    {/* <div>
    
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
              <MenuItem value={30}>Red</MenuItem>
              <MenuItem value={20}>Blue</MenuItem>
              <MenuItem value={10}>Yellow</MenuItem>
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
              <MenuItem value={20}>Design Team</MenuItem>
              <MenuItem value={30}>Developer Team</MenuItem>
              <MenuItem value={40}>QA Team</MenuItem>
            </Select>
          </FormControl>
          </ListItem>
        </List>
      </Dialog>
    </div> */}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentProjects: selectCurrentProjects,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setProjectData: projectDetails => dispatch(setProjectData(projectDetails)),
  setProjectsData: projects => dispatch(setProjectsData(projects))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenDialog);
