import styled from 'styled-components';
import { device } from '../device';
import { articleData } from '../data/articles';

import Article from '../components/Article';

const Wrap = styled.div`
    background-color: #8CD2E8;
`;

const ArticleRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const SectionHead = styled.div`
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 900;
    color: white;
    text-shadow:
    -1px -1px 0 #000,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
    
    font-size: 3rem;
    margin-left: 1rem;
    margin-top: 1rem;

    @media ${device.tablet} {
        font-size: 5rem;
        margin-left: 3rem;
    }
`;

const ArticlesWrap = styled.div`
    text-align: left;
    padding-top: 5rem;
`;

const ToTop = styled.div`
    position: sticky;
    bottom: 4rem;
    left: 85%;
    width: 8rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #55BA36;    
    color: #5A3A1B;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    padding: 1rem 2rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Link = styled.a`
    color: #5A3A1B;
    text-decoration: none;
`;


const Articles = () => {
    return (
        <Wrap>
            <ArticlesWrap>
                {Object.keys(articleData).map(section => {
                    return (
                        <>
                            <SectionHead>{section}</SectionHead>
                            <ArticleRow>
                                {articleData[section].map(article => (
                                    <Article article={article} />
                                ))}
                            </ArticleRow>
                        </>
                    )
                })
                }
            </ArticlesWrap>
            <ToTop>
                    <Link href="/#top">Back To Top</Link>
            </ToTop>
        </Wrap>
    )
};

export default Articles;