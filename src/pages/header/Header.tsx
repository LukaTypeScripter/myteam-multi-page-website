
import styled from 'styled-components'
import{Link} from 'react-router-dom'
import { logoTeam } from '../../assets/logo'
import { iconClose, iconHamburger } from '../../assets/icons'
import Main from '../main/Main'
import useMediaQuery from '../../hooks/useMediaQuery'
import Button from '../../components/button/Button'
import { useState } from 'react'
import { bgPaternAboutMobileNav } from '../../assets/bgs'
const Header = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:724px)");
  const [isOpen,setisOpen] = useState(false)
  return (
    <>
    <Headers>
       <Link to="/" id='parent__link'>
       <img src={logoTeam} alt="" />
       </Link>
      
        {!isAboveMediumScreens ? (
           <div className='menu__triger'>
          <img src={isOpen ? "" : iconHamburger} alt="" onClick={() => setisOpen(!isOpen)}/>
          </div>
        ) : (
          <div className='main__header__desktop'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"} className='about'>About</Link>
          </div>
        )}
          {isAboveMediumScreens && isOpen && (
            <div className='btn__cont'>
          <Button Text='Contact Us' padding='9px 30px 8px' borderRadius='24px' border='2px solid transparent' bgColor='transparent' color='#fff' borderColor='#fff'/>
            </div>
            
          )}
        { isOpen&& !isAboveMediumScreens && (
          <div className='mobile__sidebar__cont'>
            <div className='mobile__sidebar__blur'>
            </div>
            <div className='mobile__menu'>
              <div className='exit'>
                <div className='btn__close'>
                    <img src={iconClose} alt="" onClick={() => setisOpen(false)}/>
                </div>
              </div>
              <div className='menu__body'>
              <Link to={"/"}>Home</Link>
            <Link to={"/about"} className='about'>About</Link>
            <Button Text='Contact Us' padding='9px 30px 8px' borderRadius='24px' border='2px solid transparent' bgColor='transparent' color='#fff' borderColor='#fff'/>
              </div>
            </div>
          </div>
        )}
       
    </Headers>
    <Main />
    </>
  )
}

const Headers = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 48px 24px;
    color: #fff;
    @media (min-width: 48em){
      justify-content: flex-start;
    padding-top: 61px;
    padding-right: 40px;
    padding-left: 40px;
    font-weight: 600;
    }

  

    #parent__link {
      width: 134px;
        height: 32px;
    }
    .menu__triger {

    }

    .main__header__desktop {
      margin-left: 48px;
      font-size: 18px;
      line-height: 28px;
      .about {
        margin-left: 30px;
      }
    }

    .btn__cont {
      margin-left: auto;
      font-size: 18px;
      line-height: 28px;
    }

    .mobile__sidebar__blur {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    }
    .mobile__menu {
      position: fixed;
    top: 0;
    right: 0;
    width: 255px;
    height: 100%;
    font-size: 18px;
    font-weight: 600;
    background-color: #2c6269;
    background-image: url(${bgPaternAboutMobileNav});
    background-repeat: no-repeat;
    background-position: right -100px top 465px;
    .exit {
      display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 24px;
    padding: 48px 24px;
    color: #fff;
    .btn__close {
      cursor: pointer;
      margin-top: 8px;
    }
    }
    }
    .menu__body {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0 48px;
    }
`

export default Header