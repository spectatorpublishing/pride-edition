import styled from 'styled-components';
import Logo from '../assets/eye-logo.svg';
import Article from '../components/Article';
import { articleData } from '../data/articles';
import { device } from '../device';

const Main = styled.div`
    background: rgba(18, 18, 18, 0.9);
`;

const Wrapper = styled.div`
    padding: 1rem;

    @media ${device.tablet} {
        padding: 5rem;
        padding-top: 0rem;
    }
`;

const EyeLogo = styled.img`
    width: 10rem;
    top: 0;
    left: 0;
`;

const Title = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0em;
    color: #40A36E;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
`;

const Body = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 3rem;
`;

const LeadIllo = styled.img`
    width: 100%;
`;

const ArticleRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const FirstFold = () => {
    return (
    <Main>
        <EyeLogo src={Logo} />
        <Wrapper>
            <Title>the hurston issue</Title>
            <Body>
                <LeadIllo src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/WIOCP6NXTRCSZBRTBAXGOOZ5K4.jpg" alt="" />
                <ArticleRow>
                    {articleData.map(article => (
                        <Article article={article} />
                    ))}
                </ArticleRow>
            </Body>
        </Wrapper>
    </Main>
    )
};

export default FirstFold;
