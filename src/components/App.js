import { Profile } from './Profile/Profile';
import user from '../components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Statistics/Section';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  const statsData = data.map(item => ({
    id: item.id,
    label: item.label,
    percentage: item.percentage,
  }));

  const friendsData = friends.map(item => ({
    id: item.id,
    name: item.name,
    isOnline: item.isOnline,
    avatar: item.avatar,
  }));

const transactionsData=transactions.map(item=>({
  id: item.id,
  type: item.type,
  amount: item.amount,
  currency: item.currency,
}))

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Section title="Upload stats">
        <Statistics items={statsData} />
      </Section>

      <FriendList friends={friendsData} />

      <TransactionHistory transactions={transactionsData}/>
    </div>
  );

  // return <Statistics/>
};
