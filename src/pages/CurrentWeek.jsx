import React from 'react';
import Header from '../components/Header';
import Leaderboard from '../components/Leaderboard'

export default function CurrentWeek(){
    return (
        <div>
          <Header name="Current Week (1/15)"/>
          <Leaderboard/>
        </div>
    );
}
