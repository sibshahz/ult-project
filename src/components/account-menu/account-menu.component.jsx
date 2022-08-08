import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconLogout,
  IconUser,IconMail

} from '@tabler/icons';
import { auth } from '../../firebase/firebase';
function AccountMenu({user}) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button><IconSettings /></Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item disabled 
          icon={<IconSearch size={14} />}
          rightSection={<Text size="xs" color="dimmed" >⌘K</Text>}
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Account</Menu.Label>
        <Menu.Item icon={<IconUser size={14} />} 
          sx={{ textTransform:'capitalize' }} >{user.name}</Menu.Item>
        <Menu.Item icon={<IconMail size={14} />}
          sx={{ textTransform:'lowercase' }} >{user.email}</Menu.Item>
        <Menu.Item color="red" onClick={() => auth.signOut()} icon={<IconLogout size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default AccountMenu;