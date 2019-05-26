import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import * as pricingData from './Pricing/pricing.json';
import Pricing from './Pricing/Pricing';
import * as transactionData from './TransactionHistory/TransactionHistory.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const pricingArray = pricingData.default;
const transArray = transactionData.default;

const App = () => (
  <>
    <Profile user={user} />
    <Stats stats={stats} title="Statistics" />
    <Pricing plans={pricingArray} />
    <TransactionHistory items={transArray} />
  </>
);

export default App;
