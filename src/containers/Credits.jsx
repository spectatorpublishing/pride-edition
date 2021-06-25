import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';

const Wrapper = styled.div`
    background-color: #8CD2E8;
    padding: 5rem 0rem;
    margin: 0;

    h1 {
        font-size: 60px;
        font-style: normal;
        font-weight: 900;
        letter-spacing: 0em;
        color: black;
        text-transform: uppercase;
    }
`;

const Text = styled.div`
    color: #5A3A1B;
    text-align: center;
    padding-bottom: 5rem;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;
    margin: 0 3rem;

    @media ${device.tablet} {
        justify-content: space-evenly;
        margin: 0 10rem;
    }
`;

const SubDiv = styled.div`
    width: 40rem;

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
                        <h2>Cooperate Board</h2>
                        <p>Elizabeth Karpen, Managing Editor</p>
                        <p>Sarah Braka, Editor in Chief</p>
                        <p>Tamarah Wallace, Publisher</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Design and Development</h2>
                        <p>Erin McNulty, Head of Engineering</p>
                        <p>Cindy Espinosa, Head of Product</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Lead Illustration By</h2>
                        <p>Carlos Ochoa, Staff Illustrator</p>
                    </SubDiv>
                </Row>
                <h1>Content</h1>
                <Row>
                    <SubDiv>
                        <h2>News</h2>
                        <p>Dia Gill, News editor</p>
                        <p>Susu Rawwagah</p>
                        <p>Kim Banks</p>
                        <p>Valeria Escobar</p>
                        <p>Aaron Holmes</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Sports</h2>
                        <p>Clara Ence Morse, Sports editor</p>
                        <p>Adam Lang</p>
                        <p>Max Rettig</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>{"Arts & Entertainment"}</h2>
                        <p>{"Noah Sheidlower, A&E editor"}</p>
                        <p>{"Sophie Craig, Deputy A&E editor"}</p>
                        <p>Noah Bullwinkle</p>
                        <p>Vincent Hou</p>
                        <p>Lee Alexander</p>
                        <p>Malina Gulino</p>
                        <p>Jasmine Sabadosa</p>
                        <p>Alexandra Aguirre</p>
                    </SubDiv>

                    <SubDiv>
                            <h2>The Eye</h2>
                            <p>Temi George</p>
                            <p>Sophia Durone</p>
                            <p>Peyton Alie</p>
                            <p>Nadya Shahd</p>
                            <p>Luke Cregan</p>
                            <p>Zachariah Crutchfield</p>
                            <p>Kara Schectman</p>
                            <p>Ana Espinoza</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Photo</h2>
                        <p>Beatrice Shlansky, Photo Editor</p>
                        <p>Rommel Nunez, Deputy Photo Editor</p>
                        <p>Rya Inman</p>
                        <p>Cherrie Zheng</p>
                        <p>Kirill Buskirk</p>
                        <p>Maryam Hassan</p>
                        <p>Katherine Gerberich</p>
                        <p>Athena Chin</p>
                        <p>Natalie Tischler</p>
                        <p>Jaime Danies</p>
                        <p>Michael Edmonson</p>
                    </SubDiv>

                    <SubDiv>
                            <h2>Illustrations</h2>
                            <p>Brenda Huang, Illustrations Editor</p>
                            <p>Carlos Ochoa, Deputy Illustrations Editor</p>
                            <p>Ashley Jiao, Deputy Illustrations Editor</p>
                            <p>Aaron Jackson</p>
                            <p>Liz Nichols</p>
                            <p>Daniela Casalino</p>
                            <p>Stephanie Koo</p>
                            <p>Lilly Kwon</p>
                    </SubDiv>

                </Row>
            </Text>
        </Wrapper>
    </>
)};

export default CreditsPage;