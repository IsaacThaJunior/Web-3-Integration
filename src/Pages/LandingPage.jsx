import { useWeb3React } from '@web3-react/core'
import React from 'react'
import Body from '../components/Body/Body'
import Nav from '../components/Nav/Nav'
import useWeb3Auth from '../config/useWeb3Auth'

const LandingPage = () => {
  const { active } = useWeb3React()
  const { connect } = useWeb3Auth()
  React.useEffect(() => {
    if (active) {
      connect().then(async (contract) => {
        const postCount = await contract.methods.postCount().call()
        const posts = []
        for (let index = 1; index <= postCount; index++) {
          const post = await contract.methods.posts(index).call()
		  posts.push(post)
        }
        console.log('POST COUNT', postCount)
        console.log('POSTS', posts)
      })
    }
  }, [active])
  return (
    <>
      <Nav />
      <Body />
    </>
  )
}

export default LandingPage
