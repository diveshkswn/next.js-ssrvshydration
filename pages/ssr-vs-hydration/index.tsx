import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-named-as-default

import { fetchUsers } from '../api/users';

export default function SSRVSHydration(props : {users : {name : string}[]}) {
  const [userName, setUserName] = useState<string>('');
  useEffect(() => {
    fetchUsers().then((data) => {
      setUserName(data[0].name);
    });
  }, []);

  return (
    <>
      <h2>
        User(getServerSideProps) :
        {' '}
        {props.users[0]?.name}
      </h2>
      <h3>
        User(componentDidMount/Hydration) :
        {' '}
        {userName}
      </h3>
      <h4 style={{ color: 'green' }}>Check the markup generated in view page source.</h4>
    </>
  );
}

export async function getServerSideProps() {
  const users = await fetchUsers();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
