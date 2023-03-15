import Hero from '@/components/Frontpage/Hero/Hero';
import TopMatch from '@/components/Frontpage/TopMatche/Topmatch';
import Head from 'next/head';
import React from 'react'
import { enviourment } from 'next.config';
import { getSession } from "next-auth/react"
import { redirect } from 'next/dist/server/api-utils';
const Games = ({Data})=>{
  
    return(
        <>
            <Head>
                <title>Pro Football::Games</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <TopMatch Data={Data} />
        </>
    )
}
export default Games;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${enviourment.MYFOOTBALLAPIKEY}`,
		'X-RapidAPI-Host': `${enviourment.host}`
	}
};
export async function getServerSideProps({req}){
  const responseLatest= await fetch(`${enviourment.url}`, options);
  const Data = await responseLatest.json();
  const session = await getSession({req});
  if(!session){
    return{
      redirect:{
        destination: '/',
        permanent: false
      }
    }
  }
  return{
    props:{
      session,
      Data: Data,
    }
  }
}