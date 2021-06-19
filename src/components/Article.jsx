import styled from 'styled-components';
import { device } from '../device';

const Wrapper = styled.div`
    margin: auto;
    margin-top: 2rem;
    box-sizing: border-box;

    a:link, a:visited {
        text-decoration: none;
    }

    @media ${device.tablet} {
        margin: 4rem 0;
    }

    :nth-child(1n) {
        .text {
            border-color: red;
        }
    }

    :nth-child(2n) {
        .text {
            border-color: orange;
        }
    }

    :nth-child(3n) {
        .text {
            border-color: yellow;
        }
    }

    :nth-child(4n) {
        .text {
            border-color: green;
        }
    }

    :nth-child(5n) {
        .text {
            border-color: blue;
        }
    }


    :nth-child(6n) {
        .text {
            border-color: indigo;
        }
    }
`;

const Image = styled.img`
    width: 17rem;

    @media ${device.tablet} {
        width: 25rem;
    }
`;

const Text = styled.div`
    margin-top: 1.5rem;
    padding: 1.5rem 1rem;
    border: 3px solid;
    color: #101010;

    width: 15rem;

    @media ${device.tablet} {
        width: 23rem;
    }
`;

const Headline = styled.p`
    font-family: Rubik;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
`;

const Byline = styled.p`
    font-family: 'Source Serif Pro', serif;
    font-size: .75rem;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
`;

const Article = props => {
    const { imgurl, headline, byline, link } = props.article;
    return (
        <Wrapper>
            <a href={link} target="__blank">
                <Image src={imgurl} alt="" />
                <Text className="text">
                    <Headline>{headline}</Headline>
                    <Byline>{byline}</Byline>
                </Text>
            </a>
        </Wrapper>
    );
};

export default Article;
