import { Profile } from 'components/User/User';
import { StatisticBox } from './StatisticBox/StatisticBox';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


import user from '../data/user.json'
import Statistics from '../data/Statistics.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile user ={user}/>
      <StatisticBox stats = {Statistics} title ='Upload stats'/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
