
import styled from 'styled-components'
import { bgPaternHome1, bgPaternHome2, bgPaternHome3, bgPaternHome4About, bgPaternHome5 } from '../../assets/bgs'
import {SuccesStories, data }from './smallData'
import { iconQuotes } from '../../assets/icons'
import Contact from '../Contact/Contact'
interface DataType {
    img:string
    title:string
    description:string
}
interface StyriesData {
    story:string
    StoryAuthor:string
    subtitle:string
    img:string
}
function Main() {
  return (
    <>
  <ManinBody>
    <div className='home'>
        <section className='intro__sec'>
            <h2 className='intro__title'>
                Find the
                <br />
                Best
                <span className='talant'>talant</span>
            </h2>
            <div className='intro__text'>
            Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that. 
            </div>
        </section>
        <section className='build__sec'>
            <h2 className='build__intro'> Build & manage distributed teams like no one else. </h2>
            <div className='build__boxes'>
                {data.map((data:DataType) => (
                    <div className='box' key={data.img}>
                    <div className='icon' style={{backgroundImage:`url(${data.img})`}}></div>
                    <div className='build__message'>
                        <div className='build__title'>{data.title}</div>
                        <div className='build__description'>{data.description}</div>
                    </div>
                </div>
                ))}
                
            </div>
        </section>
        <section className='delivering__sec'>
            <div className='delivering__intro'>
            <h2>Delivering real results for top companies. Some of our <span className='delivering__highligth'>success stories</span></h2>
            </div>
            <div className='delivering__boxes'>
                {SuccesStories.map((s:StyriesData) => (
                      <div className='delivering__box' key={s.story}>
                        <div className='delivering__text'>{s.story}</div>
                        <div className='delivering__author'>{s.StoryAuthor}</div>
                        <div className='delivering__title'>{s.subtitle}</div>
                        <div className='delivering__avatar'>
                            <img src={s.img} alt="" className='author' />
                        </div>
                      </div>
                ))}
              
            </div>
        </section>
        <section className='get__started__sec'></section>
    </div>
  
  </ManinBody>
  <Contact />
  </>
  )
}
const ManinBody = styled.div`
    margin-top: 30px;
    color: #fff;
    section {
        padding: 0 25px;
    }
    .intro__sec {
        padding-bottom: 180px;
    background-image: url(${bgPaternHome2});
    background-repeat: no-repeat;
    background-position: bottom;
    @media (min-width: 90em) {
        position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 250px;
    padding-left: 165px;
    background-image: url(${bgPaternHome1}),url(${bgPaternHome2});
    background-position: left -100px top 50px,right 165px bottom;
    }
.intro__title {
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
    @media (min-width: 90em) {
        font-size: 100px;
    line-height: 100px;
    text-align: left;
    }
    .talant {
        color: #f67e7e;
        margin-left: 5px;
    }
}
}
    .intro__text {
        margin: 18px 0;
    font-size: 15px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
    @media (min-width: 90em) {
        width: 450px;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    }
    }
    @media (min-width: 90em) {
        .intro__text::before {
            position: absolute;
    top: 50px;
    display: block;
    width: 50px;
    height: 4px;
    content: "";
    background: #79c8c7;
        }
    }
  
    /**build */
    .build__sec {
        padding-top: 62px;
    padding-right: 22px;
    padding-bottom: 64px;
    padding-left: 22px;
    background-color: #012f34;
    background-image: url(${bgPaternHome3});
    background-repeat: no-repeat;
    background-position: right -100px top;
    @media (min-width: 90em) {
        display: flex;
    justify-content: space-between;
    padding: 140px 165px 145px;
    background-position: right -100px bottom;
    }
    .build__intro {
        padding-right: 111px;
    margin-bottom: 55px;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    @media (min-width: 90em)  {
        width: 445px;
    padding-right: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    }
    }
    .build__intro::before {
        display: block;
    width: 50px;
    height: 4px;
    margin-bottom: 32px;
    content: "";
    background-color: #f67e7e;
    }
    }
.build__boxes {
    @media (min-width: 90em) {
        width: 540px;
    margin-top: 38px;
    }
}
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    text-align: center;
    @media (min-width: 90em) {
        flex-direction: row;
        padding-right: 15px;
    }
    .build__title {
        margin-top: 18px;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #f67e7e;
    }
    .build__description {
        margin-top: 7px;
    line-height: 25px;
    color: hsla(0,0%,100%,.8);
    }
}
.icon {
    width: 72px;
    height: 72px;
    background-repeat: no-repeat;
    background-position: top;
    @media (min-width: 90em) {
        width: 140px;
    background-position: 0 0;
    }
}


.delivering__sec {
    padding-top: 140px;
    padding-bottom: 160px;
    text-align: center;
    background-color: #004047;
    background-image: url(${bgPaternHome4About}),url(${bgPaternHome5});
    background-repeat: no-repeat;
    background-position: 0 0,100% 100%;
    @media (min-width: 90em) {
        text-align: left;
        padding: 140px 165px 143px;
    }
}
.delivering__intro {
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    @media (min-width: 90em) {
        padding: 0 80px;
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    }
}
.delivering__highligth {
    color: #79c8c7;
}
.delivering__boxes {
    @media (min-width: 90em) {
        display: flex;
        gap: 10px;
    }
}
.delivering__box {
    padding-top: 40px;
    margin-top: 48px;
    background-image: url(${iconQuotes});
    background-repeat: no-repeat;
    background-position: top;
   
}

.delivering__text {
    margin-bottom: 18px;
    font-weight: 600;
    @media (min-width: 90em) {
        text-align: center;
    }
}
.delivering__author {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #79c8c7;
    @media (min-width: 90em) {
        text-align: center;
    }
}
.delivering__title {
    font-size: 13px;
    font-style: italic;
    font-weight: 500;
    line-height: 18px;
    @media (min-width: 90em) {
        text-align: center;
    }
}
.delivering__avatar{
    margin-top: 16px;
    @media (min-width: 90em) {
        display: flex;
        justify-content: center;
    }
    img {
        width: 62px;
    height: 62px;
    border: 2px solid #c4fffe;
    border-radius: 50%;
    }
}
`


export default Main
