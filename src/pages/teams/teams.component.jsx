import { Title } from '@mantine/core';
import React from 'react';
import { connect } from 'react-redux';
import { TeamsForm } from '../../components/teams-form/teams-form.component';

export const TeamsPage = (props) => {
  return (
    <>
        <Title>Manage Teams </Title>
        <TeamsForm />
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsPage)