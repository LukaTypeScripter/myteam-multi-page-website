
import styled from 'styled-components'
import { logoTeam } from '../../assets/logo'
import { Link } from 'react-router-dom'
import { iconFacebook, iconPintrest, iconTwitter } from '../../assets/icons'
function Footer() {
  return (
    <MainFooter>
<div className='main__footer__logo'>
    <img src={logoTeam} alt="" />
</div>
<div className='main__footer__links'>
    <Link to={'/'}>home</Link>
    <Link to={'/about'} className='second'>about</Link>
</div>
<div className='main__footer__adress'>
987 Hillcrest Lane 
<br />
Irvine, CA 
<br />
California 92714 
<br />
Call Us : 949-833-7432 
</div>
<div className='main__footer__socials'>
    <img src={iconFacebook} alt="" />
    <img src={iconPintrest} alt="" className='imgs'/>
    <img src={iconTwitter} alt="" className='imgs'/>
</div>
<div className='main__footer__copyrigth'>
Copyright 2020. All Rights Reserved.
</div>
    </MainFooter>
  )
}
const MainFooter = styled.div`
        padding: 66px 24px 64px;
    text-align: center;
    background-color: #002529;
    @media (min-width: 48em) {
        padding: 58px 35px 52px;
    }
    .main__footer__logo {
        display: flex;
    justify-content: center;
    @media (min-width: 48em) {
        justify-content: flex-start;
    margin-bottom: 52px;
    }
    img {
        width: 96px;
    height: 24px;
    @media (min-width: 48em) {
        width: 96px;
    height: 24px;
    }
    }
    }
.main__footer__links {
    display: flex;
    justify-content: center;
    padding-bottom: 24px;
    margin-top: 16px;
    @media (min-width: 48em)  {
        
    justify-content: flex-start;
    padding-bottom: 24px;
    margin-top: 16px;

    }
    @media (min-width: 48em)  {
        .second {
        padding-left:17px;
    }
    }
   
    a {
        padding: 0 12px;
    color: #fff;
    text-decoration: none;
    @media (min-width: 48em) {
        padding: 0;
       
    }
    }

}
.main__footer__adress {
    display: flex;
    justify-content: center;
    color: hsla(0,0%,100%,.6);
    @media (min-width: 48em) {
    justify-content: flex-end;
    margin-top: -126px;
    text-align: right;
    }
}
.main__footer__socials {
    display: flex;
    justify-content: center;
    margin-top: 42px;
    @media (min-width: 48em) {
        display: flex;
    justify-content: flex-start;
    margin-top: 37px;
    }
}
.imgs {
    margin-left: 14px;
}
.main__footer__copyrigth {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    color: hsla(0,0%,100%,.6);
    @media (min-width: 48em) {
        display: flex;
    justify-content: flex-end;
    margin-top: -27px;
    }
        
    
}

`
export default Footer