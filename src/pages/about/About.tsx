
import styled from "styled-components";
import {
  bgPaternAboutContact,
  bgPaternAboutMobileNav,
  bgPaternHome4About,
} from "../../assets/bgs";
import { Meets } from "../main/smallData";
import {
  logoGaddgets,
  logoGurdian,
  logoJakarta,
  logoTech,
  logoVerge,
} from "../../assets/logo";

function About() {
  return (
    <MainBody>
      <div className="about">
        <div className="intro">
          <h2 className="intro__title">About</h2>
          <div className="intro__Text">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </div>
        </div>
        {/**MEET SECTION */}

        <div className="meet">
          <h2 className="meet__title">Meet the directors</h2>
          <div className="meet__box__container">
            {Meets.map((data) => (
              <div className="meet__box" key={data.name}>
                <div className="meet__avatar">
                  <img src={data.img} alt="" />
                </div>
                <div className="meet__avatar__name">{data.name}</div>
                <div className="meet__avatar__title ">{data.subtitle}</div>
                <div className="meet__more">
                  <img src={data.plusImg} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/**clients */}
      <div className="clients">
        <h2 className="clients__title">Some of our clients</h2>
        <div className="clients__logo__container">
          <img src={logoVerge} alt="verge" id="verge" />
          <img src={logoJakarta} alt="jakarta" id="jakarta" />
          <img src={logoGurdian} alt="gurdian" id="gurdian" />
          <img src={logoTech} alt="tech" id="gurdian" />
          <img src={logoGaddgets} alt="gadgets" id="gaddgets" />
        </div>
      </div>
    </MainBody>
  );
}
const MainBody = styled.div`
  margin-top: 30px;
  color: #fff;
  .about {
    font-weight: 600;

    .intro {
      padding-bottom: 90px;
      background-image: url(${bgPaternAboutMobileNav});
      background-position: right -100px bottom -100px;
      background-repeat: no-repeat;
      @media (min-width: 48em) {
        background-position: right -100px bottom 0;
      }
      @media (min-width: 90em) {
        display: flex;
        align-items: flex-end;
        padding-bottom: 120px;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        background-position: right -115px bottom 0;
        justify-content: space-between;
        padding-top: 50px;
        padding-left: 165px;
      }
      .intro__title {
        font-size: 40px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;
        @media (min-width: 90em) {
          text-align: left;
          font-size: 64px;
        }
      }
      .intro__Text {
        margin: 18px 0;
        font-size: 15px;
        font-weight: 600;
        line-height: 28px;
        text-align: center;
        @media (min-width: 90em) {
          width: 700px;
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 28px;
          text-align: left;
          padding-right: 160px;
        }
      }
      @media (min-width: 90em) {
        .intro__Text::before {
          position: static;
          top: unset;
          margin-bottom: 40px;
          background-color: #f67e7e;
          display: block;
          width: 50px;
          height: 4px;
          content: "";
        }
      }
    }
  }
  .meet {
    padding: 88px 24px 117px;
    background-color: #004047;
    background-image: url(${bgPaternAboutContact});
    background-repeat: no-repeat;
    background-position: left -100px top -100px;

    @media (min-width: 48em) {
      padding-top: 100px;
      padding-bottom: 128px;
      background-position: left -100px top 0;
    }
  }
  .meet__title {
    margin-bottom: 48px;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
  }

  .meet__box__container {
    @media (min-width: 48em) {
      display: grid;
      grid-template-columns: 281px 281px;
      grid-row-gap: 76px;
      grid-column-gap: 11px;
      justify-content: center;
      width: 100%;
    }
    @media (min-width: 90em) {
      grid-template-columns: 350px 350px 350px;
      margin-top: 60px;
      margin-bottom: 150px;
    }
  }
  .meet__box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px 56px;
    background-color: #012f34;
    transition: background-color 0.5s ease;
    margin-top: 52px;
  }
  .meet__avatar {
    width: 96px;
    height: 96px;
    margin-bottom: 16px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid #c4fffe;
    }
  }
  .meet__avatar__name {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #79c8c7;
  }
  .meet__avatar__title {
    font-size: 15px;
    font-style: italic;
    font-weight: 500;
    line-height: 25px;
  }
  .meet__more {
    position: absolute;
    bottom: -28px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    cursor: pointer;
    background-color: #f67e7e;
    border-radius: 50%;
    transition: background-color 0.25s ease;
  }

  //clients

  .clients {
    display: flex;
    flex-direction: column;
    padding-bottom: 90px;
    background-color: #012f34;
    background-image: url(${bgPaternHome4About});
    background-repeat: no-repeat;
    background-position: left -100px top -100px;
    padding: 88px 24px 117px;
    @media (min-width: 48em) {
        padding-top: 100px;
    padding-bottom: 105px;
    background-position: left top -100px;
    }
    @media (min-width: 90em) {
        padding-top: 140px;
    padding-bottom: 145px;
    padding-left: 30px;
    background-position: 0 0;
    }
  }
  .clients__title {
    margin-bottom: 44px;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
    @media (min-width: 90em) {
        font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 40px;
    }
  }
  .clients__logo__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 48em) {
        flex-direction: row;
    justify-content: center;
    }
    @media (min-width: 90em) {
        margin-top: 20px;
    } 
  }
  //logos
  #verge {
    max-width: 146px;
    margin-top: 20px;
    @media (min-width: 48em) {
        margin-top: 0;

    }
    @media (min-width: 90em) {
        width: 165px;
    height: 28px;
    }
  }
  #jakarta {
    max-width: 160px;
    margin-top: 56px;
    @media (min-width: 48em) {
        margin-top: 0;
        margin-left: 24px;
    }
    @media (min-width: 90em) {
        width: 184px;
    height: 23px;
    margin-left: 100px;
    }
  }
  #gurdian {
    max-width: 146px;
    margin-top: 56px;
    @media (min-width: 48em) {
        margin-top: 0;
        margin-left: 24px;
    }
    @media (min-width: 90em) {
        width: 165px;
    height: 28px;
    margin-left: 100px;
    }
  }
  #gaddgets {
    max-width: 90px;
    margin-top: 56px;
    @media (min-width: 48em) {
        margin-top: 0;
        margin-left: 24px;
    }
    @media (min-width: 90em) {
        width: 98px;
    height: 45px;
    margin-left: 100px;
    }
  }
`;
export default About;
