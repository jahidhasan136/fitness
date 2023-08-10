import Image from 'next/image'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Exercises from './components/Exercises/Exercises'
import Workout from './components/Workout/Workout'
import TrainingCenter from './components/TrainingCenter/TrainingCenter'
import PeopleSays from './components/PeopleSays/PeopleSays'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Exercises></Exercises>
      {/* <Workout></Workout>
      <TrainingCenter></TrainingCenter>
      <PeopleSays></PeopleSays>
      <Footer></Footer> */}
    </>
  )
}
