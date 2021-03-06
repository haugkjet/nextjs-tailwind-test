import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PriceTracker from './components/PriceTracker'

export default function Home() {

  const pricesToTrack = [
    {ticker : 'BTC', price: '25609.9', lastUpdate : new Date (2020,2,3)},
    {ticker : 'ETH', price: '3609.9', lastUpdate :  new Date (2020,2,3)},
    {ticker : 'ADA', price: '100.9', lastUpdate :  new Date (2020,2,3)},
    {ticker : 'SOL', price: '229.9', lastUpdate :  new Date (2020,2,3)}
  ];

  return (

  <div>
    <h1 className="text-3xl text-green-500 font-bold" >Welcome to NextJS test</h1> 
    <PriceTracker ticker={pricesToTrack[0].ticker} price={pricesToTrack[0].price} lastUpdate={pricesToTrack[0].lastUpdate.toISOString()}></PriceTracker>
    <PriceTracker ticker={pricesToTrack[1].ticker} price={pricesToTrack[1].price} lastUpdate={pricesToTrack[1].lastUpdate.toISOString()}></PriceTracker>
    <PriceTracker ticker={pricesToTrack[2].ticker} price={pricesToTrack[2].price} lastUpdate={pricesToTrack[2].lastUpdate.toISOString()}></PriceTracker>
    <PriceTracker ticker={pricesToTrack[3].ticker} price={pricesToTrack[3].price} lastUpdate={pricesToTrack[3].lastUpdate.toISOString()}></PriceTracker>
  </div>

  )};
