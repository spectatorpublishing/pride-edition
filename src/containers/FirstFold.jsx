import styled from 'styled-components';
import Article from '../components/Article';
import { articleData } from '../data/articles';
import { device } from '../device';

const Main = styled.div`
    background-color: #8CD2E8;
`;

const Wrapper = styled.div`
    padding: 1rem;

    @media ${device.tablet} {
        padding: 5rem;
        padding-top: 0rem;
    }
`;

const Logo = styled.img`
    width: 15rem;
    margin: 2rem;
`;

const Title = styled.h1`
    text-align: center;

    img {
        width: 50%;
    }
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
        <Logo src="https://cds-archives.s3.amazonaws.com/pb/resources/img/spectator-logo.png" />
        <Wrapper>
            <Title>
                <img src="https://cds-static-hosting.s3.amazonaws.com/pride2.png" alt="Pride Edition" />
            </Title>
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
