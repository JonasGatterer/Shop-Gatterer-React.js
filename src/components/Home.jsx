import Header from './Header';
import Carousel from './Carousel';
import MainBody from './MainBody';
import Footer from './Footer';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <MainBody />
            <Footer />
        </div>
    );
}

export default Home;