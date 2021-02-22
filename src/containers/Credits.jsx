import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';

const Wrapper = styled.div`
    /* Background Dark Green */
    background: linear-gradient(0deg, rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)), #00843E;    padding: 5rem 0rem;
    margin: 0;

    h1 {
        font-size: 60px;
        font-style: normal;
        font-weight: 900;
        letter-spacing: 0em;
        color: #40A36E;
        text-transform: uppercase;
    }
`;

const Text = styled.div`
    color: white;
    text-align: center;
    padding-bottom: 5rem;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;

    @media ${device.tablet} {
        justify-content: space-evenly;
    }
`;

const SubDiv = styled.div`
    width: 75vw;

    @media ${device.tablet} {
        width: 20rem;
    }
`;

const CreditsPage = () => {
    useEffect(() => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'auto'
        });
    });

    return (
    <>
        <Wrapper>
            <Text>
                <h1>Credits</h1>
                <Row>
                    <SubDiv>
                        <h2>Design and Development</h2>
                        <p>Erin McNulty, Head of Engineering</p>
                        <p>Cindy Espinosa, Head of Product</p>
                        <p>Ray Banke, Deputy Illustrations Editor</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Lead Illustration By</h2>
                        <p>Carlos Ochoa, Staff Illustrator</p>
                    </SubDiv>
                </Row>
                <h1>Content</h1>
                <Row>
                    <SubDiv>
                        <div>
                            <h2>The Eye</h2>
                            <p>Claudia Gohn, Managing Editor of The Eye</p>
                            <p>Cole Cahill, Lead Story Editor</p>
                            <p>Teresa Lawlor, View from Here Editor</p>
                            <p>Briani Netzahuatl, Features Editor</p>
                            <p>Derek Ng</p>
                            <p>Eve Washington</p>
                            <p>Cassie Wu</p>
                        </div>
                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h2>Illustrations</h2>
                            <p>Brenda Huang, Illustrations Editor</p>
                            <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                            <p>Ashley Jiao, Deputy Illustrations Editor</p>
                            <p>Noelle Hunter</p>
                            <p>Julian Michaud</p>
                            <p>Sadia Sharif</p>
                            <p>Nicole Yang</p>
                        </div>
                    </SubDiv>
                    {/* <SubDiv>
                        <div>
                            <h2>Copy</h2>
                            <p>Emma Bradbury, Head Copy Editor</p>
                            <p>Fritzie Schwentker, Deputy Copy Editor</p>
                            <p>Mabry Griffin, Deputy Copy Editor</p>
                            <p>Kaylene Chong, Deputy Copy Editor</p>
                            <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                            <p>Olivia Vella</p>
                            <p>Carolyn Wang</p>
                            <p>Harry Shi</p>
                            <p>Jacob Kang</p>
                            <p>Robyn Fohouo</p>
                            <p>Katherine Carraway</p>
                            <p>Rachel Borshchenko</p>
                            <p>Jonah Pitkowsky</p>
                            <p>Natalie Park</p>
                            <p>Adeline Hu</p>
                            <p>Maria Levit</p>
                            <p>Eden Teferi</p>
                            <p>Willa Nagy</p>
                            <p>Alia Derriey</p>
                            <p>Sam Barnett</p>
                            <p>Kathryn Cherven</p>
                            <p>Leif Wood</p>
                            <p>Renuka Balakrishnan</p>
                        </div>
                    </SubDiv> */}
                </Row>
            </Text>
        </Wrapper>
    </>
)};

export default CreditsPage;