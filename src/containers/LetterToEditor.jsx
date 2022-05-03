import styled from 'styled-components';
import { device } from '../device';

const Wrapper = styled.div`
    background: #F3B3C5;
    margin: 0;
    padding: 1rem;

    h1 {
        font-size: 60px;
        font-style: normal;
        font-weight: 900;
        letter-spacing: 0em;
        color: black;
        text-transform: uppercase;
        text-align: center;
    }

    @media ${device.mobile} {
        padding: 5rem;
    }
`;

const ReadMore = styled.div`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #55BA36;    
    padding: 1rem 2rem;
    width: 20rem;
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 4rem;
    color: #5A3A1B;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: .05rem;
    text-align: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Link = styled.a`
    color: #5A3A1B;
    text-decoration: none;
`;

const Letter = styled.p`
    background: white;
    color: #553820;
    font-family: 'Source Serif Pro', serif;
    padding: 1rem 2rem;

    @media ${device.mobile} {
        padding: 3rem 4rem;
        margin: 0;
    }
`;

const LetterToEditor = () => {
    return (
        <Wrapper>
            <h1>
                Letter from the Editor
            </h1>
            <Letter>
            Dear Readers,
            <br></br>
            <br></br>
            During June each year, we celebrate Pride Month, 30 days dedicated to highlighting the achievements of members of the LGBTQ community, educate ourselves on their history, and celebrate queer love. More than ever, it is integral for us to fight for gay and transgender representation and equality. With this special edition of the Spectator, we hope not only to amplify LGBTQ voices but also to highlight the struggles transgender and queer individuals face both within and outside of our community. 
            <br></br>
            <br></br>
            Within Spectator’s Pride Month edition, you can find coverage on how students navigated their gender identity through the pandemic, the Columbia Athletics initiatives to support its LGBTQ athletes, and the dying industry of lesbian bars. You will read profiles of filmmakers and artists and student leaders whose gender identity and sexuality has helped shape their work and activism and columns from students and community members exploring their identities. This issue hopes to provide glimpses of queer joy on campus and within the Morningside Heights community while highlighting how the University community must create safer spaces for LGBTQ students. 
            <br></br>
            <br></br>
            We hope that within this edition, you can learn more about the long-overlooked history of LGBTQ artists, students, and activists at Columbia and the contributions that they have and continue to make at Columbia and within the larger community. 
            <br></br>
            <br></br>
            Warmly,
            <br></br>
            Lizzie Karpen, Managing Editor
            <br></br>
            Sarah Braka, Editor in Chief
            </Letter>
{/* 
            <ReadMore>
                <Link href="https://womenshistorymonth2021.columbiadailyspectator.com/" target="__blank">Read Women's History Month</Link>
            </ReadMore> */}
        </Wrapper>
    )
};

export default LetterToEditor;