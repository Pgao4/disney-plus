import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
            </CTA>
        </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
    position:  relative;
    height:calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image:url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.7;
        z-index: -1;
    }
`
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;  
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;

`

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 90%;
`