import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconLogout } from '@tabler/icons';
import { auth } from '../../firebase/firebase';
function AccountMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button><IconSettings /></Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item disabled 
          icon={<IconSearch size={14} />}
          rightSection={<Text size="xs" color="dimmed" >⌘K</Text>}
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Account</Menu.Label>
        <Menu.Item color="red" onClick={() => auth.signOut()} icon={<IconLogout size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default AccountMenu;