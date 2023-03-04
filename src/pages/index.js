import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layout from "../layouts";
import SEO from "../components/seo";
import { Button } from "../components/button";
import BG from "../components/bg";
import StoreImage from "../images/stores_images.png";
import emailjs from "@emailjs/browser";

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
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  will-change: transform;
  align-items: flex-start;
  margin-bottom: 4rem;
`;

const StyledBodyTitle = styled.h1`
  font-size: 60px;
  white-space: wrap;
  overflow-wrap: normal;
  margin: 0rem 0 1rem 0;

  @media (max-width: 640px) {
    font-size: 56px;
  }
`;

const StyledBodySubTitle = styled.h2`
  line-height: 125%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

const StyledBodySubTitleZero = styled(StyledBodySubTitle)`
  margin-bottom: 0.4rem;
  font-weight: bold;
`;

const StyledBodySubText = styled.h3`
  line-height: 140%;
  opacity: 0.8;
  @media (max-width: 640px) {
    text-align: left;
  }
`;

const StyledItemRow = styled.nav`
  display: flex;
  flex-direction: column;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 961px) {
    flex-direction: row;
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 24px;
    }
  }
`;

const StyledItemColumn = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const StyledTradeButton = styled.button`
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
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
  background: linear-gradient(128.17deg, #bd00ff -14.78%, #ff1f8a 110.05%);

  :hover,
  :focus {
    border: 1px solid white;
  }
`;

const StyledTextArea = styled.textarea`
  resize: vertical;
  max-height: 400px;
  min-height: 100px;
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
  font-size: 18px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0px;
  -webkit-appearance: textfield;
  border-bottom: 1px solid;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
  }
`;

const StyledInput = styled.input`
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

  [type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
  }
`;

const StyledAlert = styled.div`
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
  position: relative;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: opacity 0.15s linear;
`;

const StyledTradeLink = styled(Link)`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.textColor};
  background: linear-gradient(128.17deg, #bd00ff -14.78%, #ff1f8a 110.05%);
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
  :hover,
  :focus {
    border: 1px solid white;
  }
`;

const IndexPage = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <SEO
        title="Home"
        path={props.location.pathname}
        description="Turn Website Into App"
      />
      <BG />
      <StyledBody>
        <StyledMargin>
          <StyledItemRow style={{ marginBottom: "2rem" }}>
            <StyledItemColumn>
              <StyledBodyTitle>
                <span style={{ fontWeight: 200 }}>Turn </span>
                Web<span style={{ fontWeight: 200 }}>site In</span>to App
              </StyledBodyTitle>
              <form>
                <StyledBodySubTitle>
                  No account. No coding. Enter the website address.
                </StyledBodySubTitle>
                <StyledInput
                  style={{ maxWidth: 400 }}
                  required={true}
                  type="url"
                  placeholder="https://yourwebsite.com/"
                />
                <StyledTradeButton type="submit" disabled={true}>
                  Create APK
                </StyledTradeButton>
                <StyledAlert style={{ maxWidth: 720 }}>
                  Automatic creation of a demo is unavailable. Please contact us
                  at contact@web2app.app.
                </StyledAlert>
              </form>
              <Button
                style={{ maxWidth: 560 }}
                outlined
                onClick={() => {
                  window.open(
                    "https://play.google.com/store/apps/details?id=demo.web2app.app",
                    "_blank"
                  );
                }}
              >
                <StyledBodySubTitleZero>Android App 🤩</StyledBodySubTitleZero>
                <StyledInfoText>
                  Test how your website will work on the mobile app version by
                  downloading our app from the Google Play store.
                </StyledInfoText>
              </Button>
            </StyledItemColumn>
          </StyledItemRow>
        </StyledMargin>
        <EcosystemSection props={props} />
        <DeveloperSection props={props} />
        <FAQSection props={props} />
        <ContactSection props={props} />
      </StyledBody>
    </Layout>
  );
};

export default IndexPage;

const StyledSectionHeader = styled.h1`
  font-size: 22px;
  white-space: wrap;
  overflow-wrap: normal;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    text-align: left;
  }
`;

const StyledMargin = styled.div`
  margin: 2.5rem 0;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
`;

const StyledInfoText = styled.div`
  text-align: "left";
  opacity: 0.8;
  margin: 0;
  font-size: 18px;
  font-weight: 400px;
`;

const EcosystemSection = () => {
  return (
    <StyledSection>
      <StyledItemRow>
        <StyledItemColumn>
          <StyledSectionHeader>
            <div>
              Without a mobile app, your business is losing dozens of potential
              customers!
            </div>
            <div>Change it today! With Web2App.app you will:</div>
          </StyledSectionHeader>
          <StyledBodySubText>
            <span role="img" aria-label="img">
              ✅
            </span>{" "}
            Reach new people
            <br />
            <span role="img" aria-label="img">
              ✅
            </span>{" "}
            Engage mobile users
            <br />
            <span role="img" aria-label="img">
              ✅
            </span>{" "}
            Monetize their interest!
          </StyledBodySubText>
        </StyledItemColumn>
        <StyledItemColumn>
          <StyledSectionHeader>
            Full version{" "}
            <span role="img" aria-label="img">
              😎
            </span>{" "}
            available for Android or IOS!
          </StyledSectionHeader>
          <img src={StoreImage} alt="store" width={160} />
        </StyledItemColumn>
      </StyledItemRow>
      <StyledItemRow>
        <StyledItemColumn>
          <StyledSectionHeader>How does this work?</StyledSectionHeader>
          <StyledBodySubText>
            1 Test your website in the mobile demo
            <br />
            2 Request the full mobile version
            <br />3 Enjoy better contact with mobile users!
          </StyledBodySubText>
        </StyledItemColumn>
        <StyledItemColumn>
          <StyledSectionHeader>How does the app work?</StyledSectionHeader>
          <StyledBodySubText style={{ fontSize: 18 }}>
            The application displays the content of the website.
            <br />
            The website must be adapted to mobile devices.
            <br />
            You don't have to worry about updating the application. If you make
            changes to the website, the application will be updated
            automatically.
            <br />
            To build the application, you only need to enter the website
            address. You can enter any address. You don't need to be the site
            owner and have access to the code or the server.
            <br />
            The application requires a permanent internet connection.
          </StyledBodySubText>
        </StyledItemColumn>
      </StyledItemRow>
    </StyledSection>
  );
};

const DeveloperSection = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledSection>
      <StyledBodySubTitle>
        Check our offer{" "}
        <span role="img" aria-label="img">
          🚀
        </span>
      </StyledBodySubTitle>
      <StyledItemRow>
        <StyledItemColumn>
          <Button outlined onClick={scrollToTop}>
            <StyledBodySubTitleZero>
              Free Demo{" "}
              <span role="img" aria-label="img">
                😉
              </span>
            </StyledBodySubTitleZero>
            <StyledInfoText>
              <span role="img" aria-label="img">
                🛠
              </span>{" "}
              Application available only on Android
              <br />
              <span role="img" aria-label="img">
                🛠
              </span>{" "}
              Automatically download the .apk file
              <br />
              <span role="img" aria-label="img">
                ❌
              </span>{" "}
              You cannot set your icon and application name
              <br />
              <span role="img" aria-label="img">
                ❌
              </span>{" "}
              The app cannot be deployed on Google Play and other stores
              <br />
              <span role="img" aria-label="img">
                ❌
              </span>{" "}
              It is not possible to make additional changes in the application
              <br />
              <span role="img" aria-label="img">
                ❌
              </span>{" "}
              We do not provide technical support
            </StyledInfoText>
          </Button>
        </StyledItemColumn>
        <StyledItemColumn>
          <Button outlined onClick={scrollToBottom}>
            <StyledBodySubTitleZero>
              Full Version{" "}
              <span role="img" aria-label="img">
                😎
              </span>
            </StyledBodySubTitleZero>
            <StyledInfoText>
              <span role="img" aria-label="img">
                🛠
              </span>{" "}
              Application available on Android or IOS
              <br />
              <span role="img" aria-label="img">
                🛠
              </span>{" "}
              Email contact required
              <br />
              <span role="img" aria-label="img">
                ✅
              </span>{" "}
              You can set your icon and application name
              <br />
              <span role="img" aria-label="img">
                ✅
              </span>{" "}
              The app can be deployed on Google Play or the App Store
              <br />
              <span role="img" aria-label="img">
                ✅
              </span>{" "}
              It is possible to make additional changes in the application
              <br />
              <span role="img" aria-label="img">
                ✅
              </span>{" "}
              We provide technical support
            </StyledInfoText>
          </Button>
        </StyledItemColumn>
      </StyledItemRow>
    </StyledSection>
  );
};

const StyledExternalLink = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  width: 100%;
  cursor: pointer;
  :focus {
    outline: 0;
    opacity: 0.9;
  }
  :hover {
    * {
      color: ${({ theme }) => theme.colors.grey5};
    }
  }
`;

const FAQSection = () => {
  return (
    <StyledSection style={{ marginBottom: "4rem" }}>
      <StyledBodySubTitle style={{ marginTop: "2rem" }}>
        Frequently asked questions{" "}
        <span role="img" aria-label="img">
          🧐
        </span>
      </StyledBodySubTitle>
      <StyledItemRow style={{ marginBottom: "2rem" }}>
        <StyledItemColumn>
          <b style={{ paddingBottom: 8 }}>
            Are you able to convert every page into an app?
          </b>
          We can handle every website if it has responsive design (looks good
          and works on mobile devices through web browser). I recommend you to
          download our official demo application and verify how your website
          will look on mobile screen. Every feature will be working in the same
          way like on the webpage.
        </StyledItemColumn>
        <StyledItemColumn>
          <b style={{ paddingBottom: 8 }}>
            How long it takes to convert my webpage into an app?
          </b>
          The implementation time of the project is respectively: for Android
          platform 1-7 days for iOS platform 3-14 days. The waiting time is
          mainly determined by the security checking process on the part of the
          PlayStore and AppStore management team.
        </StyledItemColumn>
        <StyledItemColumn>
          <b style={{ paddingBottom: 8 }}>
            Do you help to create a developer account?
          </b>
          We help you through the entire process, from setting up a developer
          account to uploading your app to the PlayStore / AppStore.
        </StyledItemColumn>
      </StyledItemRow>
      <StyledTradeLink to="/faq">More</StyledTradeLink>
    </StyledSection>
  );
};

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [can, setCan] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    setCan(false);

    emailjs
      .sendForm(
        "service_1cm0bwh",
        "template_a4pcz23",
        form.current,
        "eSz_GZMKvVtJvnGWk"
      )
      .then(
        (result) => {
          setStatus(result.text);
          setCan(true);
          form.current.reset();
        },
        (error) => {
          setStatus(error.text);
          setCan(true);
        }
      );
  };

  return (
    <StyledSection>
      <StyledItemRow style={{ marginBottom: "2rem" }}>
        <StyledItemColumn style={{ minWidth: "255px", width: "auto" }}>
          <StyledBodySubTitle>
            Write to us by email{" "}
            <span role="img" aria-label="img">
              📨
            </span>
            <br />
            <StyledExternalLink
              style={{ fontSize: 18 }}
              href={"mailto:contact@web2app.app"}
            >
              contact@web2app.app
            </StyledExternalLink>
          </StyledBodySubTitle>
        </StyledItemColumn>
        <StyledItemColumn>
          <Button>
            <StyledBodySubTitleZero>
              <span style={{ color: status == "OK" ? "green" : "red" }}>
                {" "}
                {status == "OK" ? "Thank you for Your message!" : status}
              </span>
            </StyledBodySubTitleZero>
            <form ref={form} onSubmit={sendEmail}>
              <StyledInput
                required={true}
                type="email"
                placeholder="Your email"
                name="from_name"
              />
              <StyledTextArea
                name="message"
                required={true}
                type="text"
                rows={5}
                placeholder="Your message"
              />
              <input required={true} type="checkbox" />
              <span
                style={{
                  fontSize: 15,
                  marginLeft: 8,
                  marginRight: 8,
                  marginBottom: 10,
                }}
              >
                Accept the{" "}
                <a target="_black" href="/privacy">
                  {" "}
                  privacy policy
                </a>
              </span>
              <StyledTradeButton
                style={{ float: "right", marginTop: 18 }}
                type="submit"
                disabled={!can}
              >
                Send Message 🤝
              </StyledTradeButton>
            </form>
          </Button>
        </StyledItemColumn>
      </StyledItemRow>
    </StyledSection>
  );
};
