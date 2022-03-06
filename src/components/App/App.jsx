import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import { FriendsList } from 'components/FriendList/FriendList';

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      {/* <Statistics stats={data} /> */}
    </>
  );
}
