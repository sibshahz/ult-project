import { Title } from '@mantine/core';
import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from '@mantine/core';
import { TeamsForm } from '../../components/teams-form/teams-form.component';
import {IconUserPlus,IconUsers} from '@tabler/icons';
import { MembersList } from '../../components/members-list/members-list.component';

export const TeamsPage = () => {
  return (
    <>
        {/* <Title>Manage Teams </Title> */}
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery" icon={<IconUserPlus size={14} />}>Add +</Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconUsers size={14} />}>Manage Teams</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            <TeamsForm />
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            <MembersList />
          </Tabs.Panel>
        </Tabs>

    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsPage)