// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}
export async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export default function getUsers(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  fetchUsers().then((data) => {
    res.status(200).json(data);
  });
}
