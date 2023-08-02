
import styled from 'styled-components'
import { bgPaternContact } from '../../assets/bgs'
import { dataContact } from '../main/smallData'
import Button from '../../components/button/Button'
function ContactForm() {
  return (
<MainBody>
    <div className='contact'>
        <div className='intro'>
            <div className='intro__contact'>
                <h2 className='intro__title'>
                    Contact <span className='hiligth'>Ask us About</span>
                </h2>
            
            {dataContact.map((data) => (
  <div className='contact__about__item' key={data.img}>
  <div className='contact__about__img' style={{backgroundImage:`url(${data.img})`}}></div>
  <div className='contact__about__text'>{data.title}</div>
  </div> 
            ))}
            </div>
              <form action="">
            <div className='form__group'>
                <label htmlFor="">
                    <input type="text" placeholder='name' />
                </label>
            </div>
            <div className='form__group'>
                <label htmlFor="">
                    <input type="text" placeholder='Email Adress' />
                </label>
            </div>
            <div className='form__group'>
                <label htmlFor="">
                    <input type="text" placeholder='Company Name'/>
                </label>
            </div>
            <div className='form__group'>
                <label htmlFor="">
                    <input type="text" placeholder='title'/>
                </label>
            </div>
            <div className='form__group'>
                <label htmlFor="">
                    <textarea placeholder='message' />
                </label>
            </div>
            <div>
                <Button color='#004047' bgColor='#fff' border='2px solid transparent' borderRadius='24px' padding='9px 30px 8px' Text='submit'/>
            </div>
        </form> 
        </div>


        
    </div>
</MainBody>
  )
}
const MainBody = styled.div`
    margin-top: 30px;
    color: #fff;
.contact {
    background-color: #014e56;
}
.intro {
   
    background-image: url(${bgPaternContact});
    background-position: right -100px bottom -111px;
    background-repeat: no-repeat;
    padding: 0 25px;
    padding-bottom: 89px;
    @media (min-width: 90em) {
        align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 86px;
    background-position: right -100px bottom;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-left: 104px;
    padding-right: 104px;
    }
}
.intro__title {
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    @media (min-width: 48em) {
        font-size: 64px;
    line-height: 56px;
    }
    @media (min-width: 90em) {
        font-size: 64px;
    font-weight: 700;
    line-height: 100px;
    text-align: left;
    }
}
form {
    @media (min-width: 48em) {
        width: 535px;
    } 
}
.intro__contact {
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
.hiligth {
    display: block;
    margin-top: 16px;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    color: #f67e7e;
}
}


.contact__about__item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.contact__about__img {
    width: 120px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: 0 0;
}
.contact__about__text {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
}
.form__group {
    margin-bottom: 27px;
    input {
        width: 100%;
    padding-bottom: 16px;
    padding-left: 16px;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid hsla(0,0%,100%,.8);
    outline: none;
    transition: all .25s ease;
    }
    textarea{
        width: 100%;
    padding-bottom: 16px;
    padding-left: 16px;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid hsla(0,0%,100%,.8);
    outline: none;
    transition: all .25s ease;
    min-height: 82px;
    margin-bottom: -11px;
}
    }

`
export default ContactForm