import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Upload stats">
        <Statistics items={data} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
};
