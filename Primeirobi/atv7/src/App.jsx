import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
    const postData = {
        titulo: "Por que o Daft Punk se separou? Thomas Bangalter responde",
        autor: "Rafael Thober",
        data: "14 de Abril de 2026",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/d/db/Daft_Punk_in_2013.jpg",
        conteudo: "Recentemente, Thomas Bangalter revelou que o duo queria se distanciar das sonoridades produzidas por robôs. Para ele, o conceito perdeu o sentido quando o mundo real começou a se tornar excessivamente mecanizado."
    };

    return (
        <div className="app-container">
            <Header />
            <Navigation />
            <main>
                <Article 
                    titulo={postData.titulo}
                    autor={postData.autor}
                    data={postData.data}
                    imagem={postData.imagem}
                    conteudo={postData.conteudo}
                />
                <Sidebar />
            </main>
            <Footer />
        </div>
    );
}

export default App;