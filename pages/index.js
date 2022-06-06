import {Header, Nav, MainSection} from "../components"
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
export default function Home() {

 
  return (<> 
    <Head> <title>Steamy - Redesign</title></Head>
    <Flex direction='column' h='100vh' w='100vw' >
      <Flex  gap={4} direction='column'  h={"100%"}  w={"100%"}  maxWidth={1350} mx='auto' p='4'>
        <Header/>  
        <Flex  h={"100%"}  >
          <Nav/>
          <MainSection/>
        </Flex> 
      </Flex>
     
    </Flex>
    </>
  )
}
