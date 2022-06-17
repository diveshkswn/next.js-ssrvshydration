import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-named-as-default
import { useRouter, NextRouter } from 'next/router';
import { fetchUsers } from '../api/users';

export default function SSRVSHydration(props : {users : {name : string}[]}) {
  const router : NextRouter = useRouter();
  const [userName, setUserName] = useState<string>('');
  useEffect(() => {
    fetchUsers().then((data) => {
      setUserName(data[Number(router.query?.id)].username);
    });
  }, [router.query?.id]);

  return (
    <>
      <h2>
        User(getStaticProps) :
        {' '}
        {props.users[Number(router.query?.id)]?.name}
      </h2>
      <h3>
        username id(componentDidMount/Hydration) :
        {' '}
        {userName}
      </h3>
      <h4 style={{ color: 'green' }}>Check the markup generated in view page source.</h4>
    </>
  );
}

export async function getStaticProps() {
  const users = await fetchUsers();
  return {
    props: { users }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const users = await fetchUsers();
  return {
    paths: [
      ...users.map((item : any) => ({ params: { id: String(item.id) } })),
    ],
    fallback: false, // false or 'blocking'
  };
}
