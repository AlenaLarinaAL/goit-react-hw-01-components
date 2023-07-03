import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import data from './Statistics/data.json';
import {FriendList} from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

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
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
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
