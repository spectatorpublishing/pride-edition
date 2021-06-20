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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ex sollicitudin, accumsan ex id, placerat mi. Phasellus sodales blandit euismod. Vivamus ac malesuada velit, sed luctus augue. Vivamus ultrices nisl lorem, vel commodo lorem scelerisque ac. Nullam sit amet porttitor neque. Etiam faucibus iaculis justo. Integer elementum volutpat nunc, non pellentesque neque tempor ut. Nunc eget lectus a nisi sodales volutpat non vitae sapien. Duis dapibus rutrum tellus, et ullamcorper magna porta ut.
                <br></br>
                <br></br>
                Donec non purus molestie, dictum nunc sed, euismod metus. Sed molestie neque ut mauris facilisis consequat in vitae arcu. Etiam hendrerit purus sit amet velit bibendum, in consequat purus tristique. Proin semper accumsan dapibus. Mauris vel ante justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur ante non porttitor tincidunt. Vestibulum imperdiet nisi sed diam eleifend rutrum. Integer volutpat hendrerit porttitor.
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nulla turpis, rhoncus id sollicitudin ac, convallis sed mi. Duis purus nisl, interdum quis laoreet quis, consequat ut augue. Vestibulum pulvinar dictum ligula et vehicula. Aliquam ut viverra ligula, non accumsan augue. Phasellus ut sagittis justo, eget congue turpis. Vivamus sed lobortis nisl. Quisque vitae ullamcorper justo, at lobortis metus. Aliquam lobortis vulputate ligula, at vestibulum urna dictum at. Mauris eget pharetra lorem, nec tincidunt neque.
                <br></br>
                <br></br>
                Suspendisse tincidunt mauris sit amet dui ornare, eget vehicula massa euismod. Nam sit amet mi sit amet tellus posuere vehicula eu sed felis. Nam vestibulum aliquet diam sed aliquam. Phasellus eget porttitor risus, vitae ultrices dui. Vivamus interdum massa vitae rutrum imperdiet. Vivamus vitae magna et metus mollis lobortis. Nullam porttitor, metus venenatis tincidunt consequat, lacus sapien fringilla dui, id tincidunt elit tortor aliquet purus. Nullam mollis non lacus quis bibendum. Donec sodales ligula non ligula feugiat finibus. Sed ac augue justo. Phasellus maximus nulla non dolor faucibus laoreet sed quis lectus. Donec euismod, magna et aliquam blandit, odio ligula auctor augue, ac vestibulum mauris lectus non lorem. Sed et pharetra mauris, vulputate sagittis elit.
                <br></br>
                <br></br>
                Fusce arcu urna, pharetra porta tellus sed, euismod malesuada lacus. Aenean nec ex semper, ultricies metus vitae, ornare nisi. Donec facilisis, enim eu scelerisque efficitur, risus arcu fermentum lectus, eu vehicula augue arcu blandit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet eu metus quis interdum. Curabitur ultricies lacinia metus, a lacinia lectus. Nullam eget ultricies magna, vitae consequat urna. Sed diam mauris, suscipit non malesuada eu, ornare ultricies mi. Proin condimentum arcu metus, id elementum tellus interdum id. Sed pharetra mi sed nibh finibus, vel pretium metus vehicula. Pellentesque faucibus, nulla a aliquam egestas, sapien ligula efficitur elit, eget mattis nisl mi et nisl.
                <br></br>
                <br></br>
                Integer hendrerit turpis mi, ut finibus massa elementum ultricies. Proin venenatis auctor enim quis blandit. Phasellus sollicitudin dignissim magna, ut blandit tellus mattis ut. Morbi nibh sapien, cursus nec tempor in, elementum ut risus. Donec ac nibh nunc. Praesent eu consequat ex. Nunc pharetra, lorem a consectetur convallis, erat sapien vestibulum tortor, at venenatis neque est porta sem. Nam mollis, sapien a fermentum sagittis, tortor diam finibus eros, nec rhoncus neque magna lacinia lorem. Pellentesque eleifend pellentesque urna sed consectetur. Sed vehicula eget dui nec dapibus. Maecenas posuere turpis ac porta vulputate.
                Vivamus porttitor molestie metus. Integer scelerisque nibh et elit fringilla, nec pharetra diam malesuada. Maecenas quis nisi ut mauris aliquet varius. Cras tempus, sapien eu fringilla finibus, purus tortor tristique dolor, nec blandit magna nisi sit amet nulla. Sed tortor metus, gravida eleifend dignissim a, gravida et mi. Maecenas condimentum odio tincidunt lorem vestibulum, ac tincidunt est accumsan. Morbi eu sollicitudin neque. Quisque faucibus dolor a sem luctus, vitae commodo enim egestas. Vivamus sem lorem, elementum a magna id, aliquet gravida mi. Integer mattis sem vel pellentesque congue. Integer mollis orci ut ullamcorper tincidunt. Quisque in augue non ligula tempor facilisis non at urna.
            </Letter>

            <ReadMore>
                <Link href="https://womenshistorymonth2021.columbiadailyspectator.com/" target="__blank">Read Women's History Month</Link>
            </ReadMore>
        </Wrapper>
    )
};

export default LetterToEditor;