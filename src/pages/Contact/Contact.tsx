import React from 'react'
import styled from 'styled-components'
import { bgPaternHome6About } from '../../assets/bgs'
import Button from '../../components/button/Button'

function Contact() {
  return (
    <ContactCont>
        <h2>Ready to get started?</h2>
        <Button color='#012f34' borderColor='#012f34'
        padding='9px 30px 8px'
        border='2px solid transparent'
        bgColor='transparent'
        borderRadius='24px'
        Text='Contact Us'
        />
    </ContactCont>
  )
}
const ContactCont = styled.section`
    padding: 83px 24px 81px;
    text-align: center;
    background-color: #f67e7e;
    background-image: url(${bgPaternHome6About});
    background-repeat: no-repeat;
    background-position: left bottom -21px;
    h2 {
        margin-bottom: 24px;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    color: #012f34;
    }

`
export default Contact