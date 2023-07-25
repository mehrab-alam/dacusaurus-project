import Head from 'next/head'


// import styles from '@/styles/Home.module.css'
import DazkoHero from '@/components/Theme/DazkoHero'
import DazkoAbout from '@/components/Theme/DazkoAbout'
import DazkoJoinUs from '@/components/Theme/DazkoJoinUs'
import DazkoWorkOut from '@/components/Theme/DazkoWorkOut'
import DazkoPricing from '@/components/Theme/DazkoPricing'
import DazkoStories from '@/components/Theme/DazkoStories'
import DazkoTrainer from '@/components/Theme/DazkoTrainer'
import DazkoTestimonial from '@/components/Theme/DazkoTestimonial'
import DazkoForm from '@/components/Theme/DazkoForm'
import DazkoFooter from '@/components/Theme/DazkoFooter'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DazkoHero />
        <DazkoAbout />
        <DazkoJoinUs />
        <DazkoWorkOut />
        <DazkoPricing />
        <DazkoStories />
        <DazkoTrainer />
        <DazkoTestimonial />
        <DazkoForm />
        <DazkoFooter />
      </main>
    </>
  )
}
