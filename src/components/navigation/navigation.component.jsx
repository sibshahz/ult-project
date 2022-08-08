import React,{ useState } from 'react';
import { IconGauge,IconUsers,IconSubtask,IconHome } from '@tabler/icons';
import { Box, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const data = [
//   { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
{ icon: IconHome, 
  label: 'Home',
  to:'/',
  },  
{ icon: IconGauge, 
    label: 'Dashboard',
    to:'/dashboard',
    },
  {
    icon: IconSubtask,
    label: 'Tasks',
    to:'/tasks',
  },
  { icon: IconUsers, 
    label: 'Teams',
    to:'/teams',
 },
];

export default function Navigation() {
    const location = useLocation();
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label} 
      to={item.to}
      component={Link}
    //   active={location.pathname == item.to}
      active={index === active}
      label={item.label}
    //   description={item.description}
    //   rightSection={item.rightSection}
      icon={<item.icon size={16} stroke={1.5} />}
      onClick={() => setActive(index)}
    />
    
  ));

  return <Box sx={{ width: '100%' }}>{items}</Box>;
}