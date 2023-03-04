import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
import { Button } from '../components/button'
import BG from '../components/bg'
import StoreImage from '../images/stores_images.png'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 3rem;
  }
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  margin-bottom: 4rem;
`

const StyledBodyTitle = styled.h1`
  font-size: 56px;
  white-space: wrap;
  overflow-wrap: normal;
  margin: 2rem 0 1rem 0;

  @media (max-width: 640px) {
    width: 100%;
    font-weight: 500;
    text-align: left;
    font-size: 58px;
  }

  @media (max-width: 440px) {
    font-weight: 500;
    text-align: left;
    font-size: 52px;
  }
`

const StyledBodySubTitle = styled.h2`
  line-height: 125%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBodySubTitleZero = styled(StyledBodySubTitle)`
  margin-bottom: 0.4rem;
  font-weight: bold;
`

const StyledBodySubText = styled.h3`
  max-width: 960px;
  line-height: 140%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`

const StyledBodySubTextZero = styled(StyledBodySubText)`
  margin: 0;
`

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 960px) {
    flex-direction: row;
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
`

const StyledItemColumn = styled.nav`
  display: flex;
  flex-direction: column;

  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

export const StyledTradeButton = styled.button`
  opacity: ${({ disabled }) => disabled ? '0.6' : '1'};
  font-size: 18px;
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  color: white;
  border-radius: 12px;
  display: inline-block;
  font-weight: 500;
  width: 100%;
  width: min-content;
  white-space: nowrap;
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background: linear-gradient(128.17deg, #BD00FF -14.78%, #FF1F8A 110.05%);

  :hover,
  :focus {
    border: 1px solid white;
  }
`

const StyledInput = styled.input`
  max-width: 400px;
  margin-right: 1rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.grey9};
  background-color: transparent;
  position: relative;
  font-weight: 500;
  outline: none;
  width: 100%;
  border: none;
  float: left;
  font-size: 24px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0px;
  -webkit-appearance: textfield;
  border-bottom: 1px solid;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
  }
`

const StyledAlert = styled.div`
  width: 55%;
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
  position: relative;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: opacity .15s linear;

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`

const IndexPage = props => {
  return (
    <Layout path={props.location.pathname}>
      <SEO title='Turn website into app' path={props.location.pathname} description='Turn website into app' />
      <BG />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>
            <span style={{ fontWeight: 200 }}>Turn </span>
            web<span style={{ fontWeight: 200 }}>site in</span>to app
          </StyledBodyTitle>
            <form>
              <StyledBodySubTitle>
                No account. No coding. Enter the website address.
              </StyledBodySubTitle>
              <StyledInput
                required={true}
                type='url'
                placeholder='https://yourwebsite.com/'
              />
              <StyledTradeButton type='submit' disabled={true}>
                Create app
              </StyledTradeButton>
              <StyledAlert>
                Automatic creation of a demo is unavailable.
                You can also test how your website will work on the mobile app version by downloading our app from the Google Play store.
                Click the "Download our apps" button in the navbar.
              </StyledAlert>
            </form>
          <StyledItemColumn>
            <Button outlined>
              <StyledBodySubTitleZero>
                Demo <span role='img' aria-label='img'>😉</span>
              </StyledBodySubTitleZero>
              <StyledBodySubTextZero>
                Application available only on Android.
              </StyledBodySubTextZero>
              <StyledInfoText>
                Find out more about the offer.
              </StyledInfoText>
            </Button>
          </StyledItemColumn>
        </StyledTitle>
        <EcosystemSection props={props} />
        <DeveloperSection props={props} />
      </StyledBody>
    </Layout >
  )
}

export default IndexPage

const StyledSectionHeader = styled.h1`
  font-size: 20px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: 600px;
  }
  
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    text-align: left;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  @media (max-width: 640px) {
    margin: 1rem 0;
  }
`

const StyledInfoText = styled.div`
  text-align: 'left';
  opacity: 0.8;
  margin: 0;
  font-size: 18px;
  font-weight: 400px;
`

const StyledEmail = styled.div`
  margin-top: 2rem;
`

const EcosystemSection = () => {
  return (
    <StyledSection>
      <StyledSectionHeader>
        Without a mobile app, your business is losing dozens of potential customers! Change it today! With Web2App.app you will:
      </StyledSectionHeader>
      <StyledItemRow>
        <StyledItemColumn>
          <StyledBodySubText>
            <span role='img' aria-label='img'>✅</span> Reach new people<br />
            <span role='img' aria-label='img'>✅</span> Engage mobile users<br />
            <span role='img' aria-label='img'>✅</span> Monetize their interest!
          </StyledBodySubText>
        </StyledItemColumn>
        <StyledItemColumn>
          <img src={StoreImage} alt="store" width={160} />
        </StyledItemColumn>
      </StyledItemRow>
      <StyledSectionHeader>
        How does this work? →
      </StyledSectionHeader>
      <StyledBodySubText>
        1 Download your website in the mobile demo<br />
        2 Request the full mobile version<br />
        3 Enjoy better contact with mobile users!
      </StyledBodySubText>
      <StyledSectionHeader>
        How does the app work? →
      </StyledSectionHeader>
      <StyledBodySubText>
        The application displays the content of the website.
        <br />
        The website must be adapted to mobile devices.
        <br />
        You don't have to worry about updating the application. If you make changes to the website, the application will be updated automatically.
        <br />
        To build the application, you only need to enter the website address. You can enter any address. You
        don't need to be the site owner and have access to the code or the server.
        <br />
        The application requires a permanent internet connection.
      </StyledBodySubText>
    </StyledSection>
  )
}

const DeveloperSection = () => {
  return (
    <StyledSection>
      <StyledBodySubTitle>
        Offer <span role='img' aria-label='img'>🚀</span>
      </StyledBodySubTitle>
      <StyledItemRow>
        <StyledItemColumn>
          <Button outlined>
            <StyledBodySubTitleZero>
              Demo <span role='img' aria-label='img'>😉</span>
            </StyledBodySubTitleZero>
            <StyledInfoText>
              <span role='img' aria-label='img'>🛠</span> Application available only on Android.
              <br />
              <span role='img' aria-label='img'>🛠</span> Automatically download the .apk file.
              <br />
              <span role='img' aria-label='img'>❌</span> You cannot set your icon and application name.
              <br />
              <span role='img' aria-label='img'>❌</span> The app cannot be deployed on Google Play and other stores.
              <br />
              <span role='img' aria-label='img'>❌</span> It is not possible to make additional changes in the application.
              <br />
              <span role='img' aria-label='img'>❌</span> We do not provide technical support.
            </StyledInfoText>
          </Button>
        </StyledItemColumn>
        <StyledItemColumn>
          <Button>
            <StyledBodySubTitleZero>
              Full version <span role='img' aria-label='img'>😎</span>
            </StyledBodySubTitleZero>
            <StyledInfoText>
              <span role='img' aria-label='img'>🛠</span> Application available on Android or IOS.
              <br />
              <span role='img' aria-label='img'>🛠</span> Email contact required.
              <br />
              <span role='img' aria-label='img'>✅</span> You can set your icon and application name.
              <br />
              <span role='img' aria-label='img'>✅</span> The app can be deployed on Google Play or the App Store.
              <br />
              <span role='img' aria-label='img'>✅</span> It is possible to make additional changes in the application.
              <br />
              <span role='img' aria-label='img'>✅</span> We provide technical support.
            </StyledInfoText>
          </Button>
        </StyledItemColumn>
      </StyledItemRow>
      <StyledEmail>
        contact@web2app.app
      </StyledEmail>
    </StyledSection>
  )
}
