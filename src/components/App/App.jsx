import { Profile } from 'components/Profile';

import user from '../../data/user.json';

export function App() {
  return (
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
  );
}
