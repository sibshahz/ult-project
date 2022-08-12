import React from 'react';
import { Title,Text,Image,Timeline } from '@mantine/core';
import TeamOnTable from '../../assets/imgs/temaOnTable.jpg';
import RemoteLaptop from '../../assets/imgs/remoteLaptop.jpg';
import TeamOnBoard from '../../assets/imgs/teamOnBoard.jpg';
import { Carousel } from '@mantine/carousel';
import { IconCheck, IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons';



import { Grid } from '@mantine/core';

function LandingPage() {
  return (
    <div>
<Title>ULT-PROJECT</Title>
    <Grid mt={16}>
      <Grid.Col span={4}>
      <Timeline active={3} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconCheck size={12} />} title="Create New Project">
        <Text color="dimmed" size="sm">You have create a new project, now you can create timeline of tasks in same project or go to the next step.</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconCheck size={12} />} title="Create a new team">
        <Text color="dimmed" size="sm">Add, edit or manage teams for your projects.</Text>
        
      </Timeline.Item>

      <Timeline.Item bullet={<IconCheck size={12} />} title="Assign and manage">
        <Text color="dimmed" size="sm">Assign projects, tasks to already created teams/members.</Text>
        
      </Timeline.Item>

      <Timeline.Item bullet={<IconCheck size={12} />} title="Complete project">
        <Text color="dimmed" size="sm">You&apos;ve pushed everything to production and now project is complete :) mark your project as complete to archive.</Text>
        
      </Timeline.Item>

      
    </Timeline>
      
      </Grid.Col>
      <Grid.Col span={8}>
      <Carousel sx={{ maxWidth: '100%' }} mx="auto" withIndicators height='auto'>
        <Carousel.Slide size="100%">
        <Image
        src={TeamOnTable}
        alt="Remote Team Working"
        />
        <Text sx={{ position:'absolute', bottom:'20%',left:0,padding:12,background:'white' }}>Collaborate remotely with your team and create something great.</Text>
      </Carousel.Slide>
        <Carousel.Slide size="100%">
        <Image
        src={RemoteLaptop}
        alt="Online meetings and chats"
        />
        <Text sx={{ position:'absolute', bottom:'20%',left:0,padding:12,background:'white' }}>Set online meetings, chats and help your team mates.</Text>
        </Carousel.Slide>
        <Carousel.Slide size="100%">
        <Image
        src={TeamOnBoard}
        alt="Managing teams, tasks, and timeline"
        />
        <Text sx={{ position:'absolute', bottom:'20%',left:0,padding:12,background:'white' }}>Create and manage teams, timelines and tasks with ease..</Text>
        </Carousel.Slide>
      </Carousel> 
      
      </Grid.Col>
    </Grid>
    </div>
  )
}

export default LandingPage;