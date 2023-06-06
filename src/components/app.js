import React from "react";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// -------- import components ------------
import SearchBar from './searchBar';
import MovieList from './movieList';

const list = [
        {
            "id": 1,
            "name": "Cehennem Gecesi",
            "rating": "8.1",
            "desc": "Melinda, benzin istasyonunda çalışan genç bir kadındır. Kendisine güvenen iş arkadaşı Sheila’nın gölgesinde kalmakta bıkan Melinda’nın hayatı, bir adamın benzin istasyonunu silahla basması ile tamamen değişir.",
            "imgUrl": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yBXkC15tWwdwW7keurT169xf1Kc.jpg"

        },
        {
            "id": 2,
            "name": "Clovehitch Katili",
            "rating": "6.9",
            "desc": "Kasabanın kilisesinde gönüllü olarak çalışan Tyler Burnside (Charlie Plummer) aynı zamanda bir izcidir. Saygılı bir genç olan Tyler’ın babası da (Dylan McDermott) dürüstlüğüyle tanınan bir topluluk lideridir.",
            "imgUrl": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6NmsbUJqnopbnLun2E4KvtVNj8T.jpg"

        },
        {
            "id": 3,
            "name": "Kemik Balta",
            "rating": "7.5",
            "desc": "Dört cesur adamın, bir grup esiri, yamyam bir kabilenin elinden kurtarma girişimini anlatacak olan film, eski usül western konseptine de fazlasıyla yakın duran bir görsel estetiğe ve öykü evrenine sahip olacak",
            "imgUrl": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4MmTHpn2Y8emqvBgvOjufImUmKZ.jpg"
            
        },
        {
            "id": 4,
            "name": "Koruyucu",
            "rating": "6.9",
            "desc": "Sam Childers tüm hayatını bir uyuşturucu satıcısı olarak geçirmiştir. Karakterinde olan bu boşluğu ise tanrıyı tanıdıktan sonra savuşturabilmiştir. Artık din uğruna her şeyini vermeye hazırdır. ",
            "imgUrl": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tKHJmKTI9cLUKyslFK1icxUYxrx.jpg"

        },
        {
            "id": 5,
            "name": "Kaçış Planı",
            "rating": "8.3",
            "desc": "Mutlu bir evlilik sürdüren John ve Laura çiftinin hayatı, genç kadının bir cinayet soruşturmasında tutuklanması ile alt üst olur. Laura her ne kadar masum olduğunu söylese de, hapis cezasına çarptırılır. ",
            "imgUrl": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cbQUp8pvCbP3LVGeQnp7VpA2H6w.jpg"
        },
        {
            "id": 6,
            "name": "Sensiz Olmaz",
            "rating": "3.3",
            "desc": "Mutlu bir evlilik sürdüren John ve Laura çiftinin hayatı, genç kadının bir cinayet soruşturmasında tutuklanması ile alt üst olur. Laura her ne kadar masum olduğunu söylese de, hapis cezasına çarptırılır. ",
            "imgUrl": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vjathpTzrraTO8hOguWtXUdJZIe.jpg"
        },
        {
            "id": 7,
            "name": "Uyumsuz",
            "rating": "4.3",
            "desc": "İnsanlar 16 yaşına geldiklerinde kendi insani özelliklerine göre bu beş bölümden birine dahil olup ömür boyu bu bölümde yaşamlarını sürdürmektedirler sürdürmektedirler. ",
            "imgUrl": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/NUdRZg6owW3Hxqydy0Q0yMISAm.jpg"
        },
        {
            "id": 8,
            "name": "Açlık Oyunları: Ateşi Yakalamak",
            "rating": "5.3",
            "desc": "İAteşi Yakalamak, Katniss Everdeen'in diğer haraç Peete Mellark'la 74. Kazanmak ikilinin ailelerini ve arkadaşlarını yeniden bırakarak mıntıkalarda Kazananların ",
            "imgUrl": "https://www.themoviedb.org/t/p/w220_and_h330_face/gBvLV1JaCJStwxDD5fDsk0OIDFX.jpg"
        },
        
    ]

   
const App = () => {
    
    const[movies, setMovies] = useState(list)
    
    const deletedID = (id) => {
        setMovies(oldList => {
          return oldList.filter(list => list.id !== id)
        })
      }

    

    return (
        <div className="container">
            <div className="row">
                <SearchBar />
            </div>
            <div className="row ">
                <MovieList movies={movies} deletelists={deletedID} />
            </div>
        </div>

    );
}


export default App;