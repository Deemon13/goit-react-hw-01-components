import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendsList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

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

      <TransactionHistory items={transactions} />
    </>
  );
}
