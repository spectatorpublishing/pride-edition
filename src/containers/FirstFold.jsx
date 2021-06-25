import styled from 'styled-components';
import { device } from '../device';

const Main = styled.div`
    background-color: #8CD2E8;
    text-align: center;
    padding-bottom: 13rem;

    @media ${device.tablet} {
        text-align: left;
        padding-bottom: 0;
    }
`;

const Wrapper = styled.div`
    padding: 1rem;
    padding-bottom: 0;

    @media ${device.tablet} {
        padding: 5rem;
        padding-top: 0rem;
        padding-bottom: 0;
    }
`;

const Logo = styled.img`
    margin: 2rem 0;
    width: 15rem;

    @media ${device.tablet} {
        margin: 2rem;
    }
`;

const Title = styled.h1`
    text-align: center;

    img {
        width: 90%;
    }

    @media ${device.tablet} {
        img {
            width: 50%;
        }
    }
`;

const Body = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;
`;

const LeadIllo = styled.img`
    width: 100%;
`;

const FirstFold = () => {
    return (
    <Main>
        <Logo id = "top" src="https://cds-archives.s3.amazonaws.com/pb/resources/img/spectator-logo.png" />
        <Wrapper>
            <Title>
                <img src="https://cds-static-hosting.s3.amazonaws.com/pride2.png" alt="Pride Edition" />
            </Title>
            <Body>
                <LeadIllo src="https://cds-static-hosting.s3.amazonaws.com/LGBT+Illustration.jpg" alt="" />

            </Body>
        </Wrapper>
    </Main>
    )
};

export default FirstFold;
