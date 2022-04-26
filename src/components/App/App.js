import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import statistics from '../../data/data.json';
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

      <Statistics title="Upload stats" stats={statistics} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
