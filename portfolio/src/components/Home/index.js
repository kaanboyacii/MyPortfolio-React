import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import Logok from '../../assets/images/logok.png'
import Logo from './Logo'
import Loader from 'react-loaders'
import './index.scss'
const Home = () => {
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={Logok} alt="developer"/>
                aan
                <br/>
                Web Developer
                </h1>
                <h2>Fullstack Developer / Cyber Security Researcher</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            <Logo />      
        </div>
        <Loader type="square-spin" />
        </>
    )
}
export default Home