import React from 'react'
import styled from 'styled-components'
import{Link} from 'react-router-dom'
const Header = () => {
  return (
    <Headers>
       <Link to="/" id='parent__link'>
        <img src={""} alt="team__logo" className='team__logo' />
       </Link>
    </Headers>
  )
}

const Headers = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 48px 24px;
    color: #fff;

    #parent__link {
        width: 128px;
        height: 32px;
    }
`

export default Header