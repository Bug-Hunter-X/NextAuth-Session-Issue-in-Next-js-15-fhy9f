```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export default async function About({ session }) {

  if (!session) {
    return <p>Access denied. Please login.</p>;
  }

  return <p>This is the about page. You are logged in!</p>;
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: { session }
  };
}
```