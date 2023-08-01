
import styled from 'styled-components'
import { bgPaternHome2, bgPaternHome3, bgPaternHome4About, bgPaternHome5 } from '../../assets/bgs'
import {data }from './smallData'
interface DataType {
    img:string
    title:string
    description:string
}
function Main() {
  return (
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
                <div className='delivering__box'>

                </div>
            </div>
        </section>
        <section className='get__started__sec'></section>
    </div>
  </ManinBody>
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
.intro__title {
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
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
    .build__intro {
        padding-right: 111px;
    margin-bottom: 55px;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
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

}
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    text-align: center;
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
}


.delivering__sec {
    padding-top: 140px;
    padding-bottom: 160px;
    text-align: center;
    background-color: #004047;
    background-image: url(${bgPaternHome4About}),url(${bgPaternHome5});
    background-repeat: no-repeat;
    background-position: 0 0,100% 100%;
}
.delivering__intro {
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
}
.delivering__highligth {
    color: #79c8c7;
}
.delivering__box {
    padding-top: 40px;
    margin-top: 48px;
    background-image: url(../assets/icon-quotes.efcf9a22.svg);
    background-repeat: no-repeat;
    background-position: top;
}
`


export default Main
