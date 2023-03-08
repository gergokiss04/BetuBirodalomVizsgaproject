import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { KonyvListPage } from "./KonyvListPage";
import { KonyvSinglePage } from "./KonyvSinglePage";
import {KonyvGenrePage} from "./KonyvGenrePage";
import {KonyvRegistration} from './KonyvRegistration';
import { NavLink } from 'react-router-dom';
import './App.css';
import KonyvRecommendation from "./KonyvRecommendation";

function App() {
  return (
    <Router>
      
        {/*NAVBAR KEZDETE*/}
        <nav id="header-footer-background-image" className="navbar  sticky-top navbar-expand-lg navbar-dark fw-bold shadow-5-strong ">
          <div className="container-fluid">
            <a className="navbar-brand" id="fooldal" href="/index.html"> <img src="img/logo.png" alt="" width="200" height="40" className="d-inline-block align-text-top" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#hetikonyvajanlo" aria-current="page">Főoldal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#hetikonyvajanlo">Könyvajánló</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#hetikonyvajanlo"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Könyvek
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink to={"/Book/Genre_book/15"}><li><s className="dropdown-item" href="1">Nyelvkönyv</s></li></NavLink>
                  <NavLink  to={"/Book/Genre_book/2"}><li><s className="dropdown-item" href="#eletmod">Életmód és egészség</s></li></NavLink>
                  <NavLink  to={"/Book/Genre_book/22"}><li><s className="dropdown-item" href="#tortenelem">Történelem</s></li></NavLink>
                  <NavLink  to={"/Book/Genre_book/9"}><li><s className="dropdown-item" href="#irodalom">Irodalom</s></li></NavLink>
                  <NavLink  to={"/Book/Genre_book/17"}><li><s className="dropdown-item" href="#sport">Sport</s></li></NavLink>
                  <NavLink  to={"/Book/Genre_book/6"}><li><s className="dropdown-item" href="#gyermek">Gyermek és ifjúsági</s></li></NavLink>
                    <NavLink  to={"/Book/Genre_book/1"}><li><s className="dropdown-item" href="1">Család és gyermeknevelés</s></li></NavLink>

                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#torzsvasarloiprogram">Törzsvásárlói program</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rolunk">Rólunk</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#kapcsolat">Kapcsolat</a>
                </li>

              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink  to={"/registration"}><a className="nav-link " href="belepesregisztralcio.html">Bejelentkezés/Regisztálció</a></NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" href="#kapcsolat"><img src="../img/basket.png" height="25px" width="30px"  alt="" /></a>

                </li>

              </ul>
            </div>
          </div>
        </nav>
        {/*NAVBAR VÉGE*/}
        {/*CAROUSEL KEZDETE*/}
        <div id="carouselExampleInterval" className="carousel slide  " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="9000" >
              <img src="img/fokep.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="7000"  >
              <img src="img/ingyenes_szallitas.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="7000" >
              <img src="img/konyv_minden_korosztalynak.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="7000" >
              <img src="img/ajandekot_keres.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/*CAROUSEL VÉGE*/}
        {/*SCROLLSPY KEZDETE*/}
        {/*A BACKGROUND IMAGE KEZDETE*/}
        <div id="main-background-image">
          <br />
          {/*A CONTAINER RÉSZ KEZDETE*/}
          <div className="container ">
            {/*HETI KÖNYVAJÁNLÓ RÉSZ KEZDETE*/}
            <div  className="container-fluid text-white scrollspy light-brown-background-color">
              <KonyvRecommendation></KonyvRecommendation>
            </div>
            {/*HETI KÖNYVAJÁNLÓ VÉGE*/}

{/*OFFCANVAS ELEJE*/}
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div id="offcanvas" className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasRightLabel">Kosár tartalma:</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  ÜRES!
                </div>
              </div>
              {/*OFFCANVAS VÉGE*/}

            {/*KÖNYVEK ELEJE*/}
            <div className="container-fluid text-white scrollspy dark-brown-background-color">
              <h1>Könyveink</h1>
              <hr></hr>
            <Routes>
            <Route path="/" exact element={<KonyvListPage />} />
        <Route path="/index.html" exact element={<KonyvListPage />} />
        <Route path="/book/:bookId" exact element={<KonyvSinglePage />} />
        <Route path="/book/Genre_book/:genreId" exact element={<KonyvGenrePage />} />
        <Route path="/registration" exact element={<KonyvRegistration />} />
            </Routes>
              
              
            </div>
            {/*KÖNYVEK VÉGE*/}

            {/*TÖRZSVÁSÁRLÓI PROGRAM ELEJE*/}
            <div  className="container-fluid  text-white scrollspy light-brown-background-color">
              <h1>Törzsvásárlói program</h1>
              <hr />
              <h4>Legyen ön is Birodalomi törzsvásárló!</h4>
              <p>A Betű Birodalomnál a hosszú távú kapcsolatokban hiszünk, ezért fontos számunkra, hogy megbecsüljük visszatérő vásárlóinkat. A Birodalom törzsvásárlói Programjának keretében minden nálunk forgalmazott  termék vásárlásának 10%-át pontok formájában jóváírjuk törzsvásárlói kártyáján.</p>
              <h5>A legfontosabb tudnivalók a Birodalmi Törzsvásárlói Programról:</h5>

              <div className="row mt-3">

                <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
                  <br />
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i id="bold-white-color">Vásárlás</i>
                  </h6>
                  <img src="img/book.png" alt="brand" width="170" height="130" />
                  <hr />
                  <p id="bold-white-color">A program pontgyűjtésen alapul. Törzsvásárlóinknak a weboldalunkon vásárolt termékek után pontok formájában jóváírjuk az ár 10%-át Törzsvásárlói Kártyájukon - vagyis minden 10 Ft vásárlás után 1 pontot kap.</p>

                </div>

                <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
                  <br></br>
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i id="bold-white-color">Pontbeváltás</i>
                  </h6>
                  <img src="img/sale.png" alt="brand" width="170" height="130" />
                  <hr></hr>
                  <p id="bold-white-color">Egy adott vásárlásért jóváírt pontok a termék átvételét követő munkanaptól használhatók fel. A beváltás során 1 pont egyenértékű 1 Ft-tal. Egy vásárlás során a beváltható pontmennyiség legfeljebb a kosár fizetendő értékének 50%-a lehet.</p>

                </div>

                <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
                  <br />
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i id="bold-white-color">További kedvezmény</i>
                  </h6>
                  <img src="img/cinema.png" alt="brand" width="170" height="130" />
                  <hr />
                  <p id="bold-white-color">Hisszük, hogy a könyvek és a filmek szeretete együtt jár. Törzsvásárlóink nemcsak könyveinkhez juthatnak hozzá olcsóbban, de az Cinema City előadásaira is állandó, 10%-os kedvezményt kapnak.</p>

                </div>

                <hr></hr>
                <h4>A gombra kattintásával tud regisztrálni törzsvásárlói programunkba:</h4>

                <a href="belepesregisztralcio.html"><button id="registration" type="button" className="btn btn-success btn-rounded">Regisztrálció</button></a>

                <hr></hr>
                <p className="left">Adatok kezelése és védelme:</p>
                <p>
                  A kártya adatlapjának kitöltésével a Vásárló hozzájárul, hogy a megadott információkat - beleértve személyes adatait is - a Betű Birodalom elektronikus nyilvántartásba felvegye és feldolgozza. Az adatokat a Betű Birodalom, bizalmasan kezeli, azt harmadik félnek nem adja ki.
                </p>

              </div>
            </div>
            {/*TÖRZSVÁSÁRLÓI PROGRAM VÉGE*/}
            {/*RÓLUNK ELEJE*/}
            <div  className="container-fluid text-white scrollspy dark-brown-background-color">
              <h1>Rólunk:</h1>
              <hr />
              <div className="row mt-3">

                {/*DOMINIK ELEJE*/}
                <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
                  <br />
                  <div className="card testimonial-card mt-2 mb-3">
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img src="img/dominik.png" className="rounded-circle img-fluid"
                        alt="woman avatar" />
                    </div>
                    <div className="card-body text-center">
                      <h4 id="colorblack" className="card-title font-weight-bold">Kovács Dominik</h4>
                      <hr />
                      <p id="colorblack"><i className="fas fa-quote-left"></i>"Ne feledd,hogy ebben a programkódban hibák lehetnek! Csak bebizonyítottam,hogy nincsenek,de még nem próbáltam ki."</p>
                    </div>
                  </div>
                </div>
                <div id="center" className=" col-auto col-md-auto col-lg-8 col-xl-8 mx-auto mb-8">
                  <br />
                  <h1>Kovács Dominik</h1>
                  <p id="bold-white-color">Szabadidőmben szeretek programozni. Programozással nem rég ismerkedtem meg de első látásra nagyon bejött. Sok érdekes dolgot meglehet vele valósítani. A jövömet mindenképp ebben a szakmában képzelem el.
                    További szabadidőmben szeretek olvasni,kerékpározni vagy edzeni.</p>

                </div>
                {/*DOMINIK VÉGE*/}

                {/*TAMÁS ELEJE*/}

                <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
                  <br></br>
                  <div className="card testimonial-card mt-2 mb-3">
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img src="img/tamas.png" className="rounded-circle img-fluid"
                        alt="woman avatar" />
                    </div>
                    <div className="card-body text-center">
                      <h4 id="colorblack" className="card-title font-weight-bold">Juhász Tamás</h4>
                      <hr></hr>
                      <p id="colorblack"><i className="fas fa-quote-left"></i>"Akiket szeretek járja át a szeretet és ne játszatok az életben semmilyen szerepet.Légy önmagad ne hallgass másra,ha magad vagy,úgy állsz a földbe mint egy bástya. "</p>
                    </div>
                  </div>
                </div>
                <div id="center" className=" col-auto col-md-auto col-lg-8 col-xl-8 mx-auto mb-8">
                  <br></br>
                  <h1>Juhász Tamás</h1>
                  <p id="bold-white-color">Környezetvédelmi technikusnak tanultam Tokajban, ahol informatikusokkal voltam körbevéve és itt tetszett meg a programozás. Szeretek olvasni, legfőképpen a természettudományi és önéletrajzi témájú könyvek érdekelnek. Állatbarát vagyok, előszeretettel gondoskodom az elesett állatokról. Zenében a Hip-Hop stílust kedvelem, mert a különböző élethelyzeteket nagyon sajátosan tudja bemutatni.</p>

                </div>

                {/*TAMÁS VÉGE*/}

                {/*GERGŐ ELEJE*/}
                <div className=" col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-4">
                  <br></br>
                  <div className="card testimonial-card mt-2 mb-3">
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                      <img src="img/gergo.png" className="rounded-circle img-fluid"
                        alt="woman avatar" />
                    </div>
                    <div className="card-body text-center">
                      <h4 id="colorblack" className="card-title font-weight-bold">Kiss Gergő Zsolt </h4>
                      <hr></hr>
                      <p id="colorblack"><i className="fas fa-quote-left"></i>"A jövő háborúját a számítógépek és a mögöttük ülő programozók vívják."</p>
                    </div>
                  </div>
                </div>
                <div id="center" className=" col-auto col-md-auto col-lg-8 col-xl-8 mx-auto mb-8">
                  <br></br>
                  <h1>Kiss Gergő Zsolt</h1>
                  <p id="bold-white-color">Engem mindig is vonzott az informatika így gépészeti tanulmányaim után úgy döntöttem, hogy szerencsét próbálok az informatika területén. Számomra nagyszerű lépés volt, hiszen nagyon magával ragadott a programozás világa. Ebben képzelem el a jövőmet és programtervező informatikus szakirányban szeretnék továbbtanulni egyetemen. Szabadidőmben szeretek sportolni, kirándulni és a hobbimat űzni, ami az autogramgyűjtés híres sportolóktól. Már több mint 5000 aláírás és relikvia van a gyűjteményemben.</p>

                </div>
                {/*GERGŐ VÉGE*/}

              </div>
            </div>
            {/*RÓLUNK VÉGE*/}
            {/*KAPCSOLAT ELEJE*/}
            <div className="container-fluid text-white scrollspy light-brown-background-color">
              <h1>Kapcsolat:</h1>
              <hr></hr>
              <p>Segítségre vagy tanácsra van szükséged, vagy csak nem vagy biztos benne, hogy milyen szállítási megoldásokat tudunk ajánlani a könyveink kapcsán? Kérj segítséget ügyfélszolgálatunktól, és segítünk megtalálni a számodra legmegfelelőbb megoldásokat.A Betű Birodalom munkatársai munkanapokon, hétvégén és ünnepnapokon reggel 8 és 17 óra között fogadják üzeneteidet. </p>
              <p>Amennyiben ritka,dedikált vagy külföldi könyvet keres jelezze nekünk és megpróbálunk önnek beszerezni.</p>
              <p>Forduljon hozzánk bizalommal!</p>
              <p>A csillaggal jelölt részeket <b className="red-highlight" >kötelezően</b> kérem kitölteni:</p>
              
                
              <a target="blank" className="left" href="https://www.facebook.com/kandomiskolc"> <img src="img/fb.ico" width="40px" height="40px"  alt="" /></a>
              <a target="blank" className="left" href="mailto:betubirodalominfo@gmail.com"> <img src="img/gmail.webp" width="40px" height="40px"  alt="" /></a>
            </div >
            {/*KAPCSOLAT VÉGE*/}
           
            {/*A CONTAINER RÉSZ VÉGE*/}
          </div>
          {/*LÁBLÉC KEZDETE*/}
          <footer id="footer-background-image" className="text-center text-lg-start bg-dark text-muted">
            <section>
              <div className="container text-center text-md-start mt-5">

                <div className="row mt-3">

                  <div className=" col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
                    <br></br>
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i id="bold-white-color">Betű Birodalom Webshop</i>
                    </h6>
                    <p id="bold-white-color">Szeretettel köszöntjük a Betű Birodalom honlapján!</p>
                    <img src="img/logo3.png" alt="brand" width="240" height="120" />
                  </div>

                  <div className="col-auto col-md-auto col-lg-4 col-xl-3 mx-auto mb-4">
                    <br></br>
                    <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.249255215737!2d20.777774115056214!3d48.10542726137953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47409fe48c01588b%3A0xdc6303e601794631!2sMiskolc%20SZC%20Kand%C3%B3%20K%C3%A1lm%C3%A1n%20IT%20School!5e0!3m2!1sen!2shu!4v1648740734869!5m2!1sen!2shu" width="300" height="200" style={{border:"0"}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>


                  <div className="col-auto col-md-auto col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                    <br></br>
                    <h6 id="bold-white-color" className="text-uppercase fw-bold mb-4">
                      Elérhetőség:
                    </h6>
                    <ul>
                      <li id="bold-white-color">Cím:3525 Miskolc, Palóczy László utca 3.</li>
                      <li id="bold-white-color">Telefon: +36 46 500 930</li>
                      <li id="bold-white-color" className="footermargin">E-mail:betubirodalominfo@gmail.com</li>
                      <a target="_blank" rel="noreferrer" className="none-text-decoration" id="bold-white-color" href="https://www.kkszki.hu/"><img src="img/kandologo.png" alt="brand" width="80" height="80" /></a>


                    </ul>
                  </div>

                </div>

              </div>
            </section>


          </footer>
          {/*Lábléc vége*/}
          {/*BACKGROUND IMAGE VÉGE*/}
         
        </div>
        {/*SCROLLSPY VÉGE*/}
      
    </Router>

  );
}

export default App;