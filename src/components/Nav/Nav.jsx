import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import useWeb3Auth from '../../config/useWeb3Auth'
import { useWeb3React } from '@web3-react/core'

const Nav = () => {
  const { active, account } = useWeb3React()
  const { login, logout } = useWeb3Auth()
  return (
    <>
      <div className=" flex items-center justify-between bg-transparent py-4 md:px-10 px-4">
        <Link to="/" exact>
          {' '}
          <h2 className="text-lg font-medium cursor-pointer">
            Smart Connector
          </h2>
        </Link>

        <Button onClick={active ? logout : login} className="w-8">
          {active ? account.substring(0, 7) + '...' : 'Connect'}
        </Button>
      </div>
    </>
  )
}

export default Nav
