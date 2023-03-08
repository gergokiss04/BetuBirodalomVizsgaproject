import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export function KonyvSinglePage(props) {
    useEffect(() => {
        window.scrollTo({
          top: 1400,
          left: 1000,
          behavior: "instant"
        });
      }, []);
    const params = useParams();
    const id = params.bookId;
    const[konyv,setkonyv] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`https://localhost:7280/Book/${id}`)
            const konyv = await res.json();
            setkonyv(konyv);
            console.log(konyv)
            console.log(id)
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]);

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || !konyv.bookId ? (
                <div className="spinner-border"></div>
            ) : (
                            
                <div className="container">
                <div className="row">
                  <div className="col-xs-1 col-sm-12 col-md-3 col-lg-3 col-xl-3 ">
                    <img alt={konyv.title}
                    className="img-fluid"
                    style={{maxHeight: 500}}
                    src={konyv.cover ? konyv.cover : 
                    "https://via.placeholder.com/400x800"} 
                    />
                  </div>
                  <div className="col-xs-1 col-sm-12 col-md-8 col-lg-8 col-xl-9 ">
                    <h2>{konyv.author+": "+konyv.title}</h2>
        
                    <p>{konyv.description}</p>
                    <NavLink to="/"> <button type="button" className="btn btn-primary">Vissza a főoldalra</button>
                                          </NavLink>&nbsp;&nbsp;
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 ">
                    <p>Ár: {konyv.price+" Ft"}</p>
                    <p>Kiadó: {konyv.publisher}</p>
                    <p>Lapszám: {konyv.pageNumber}</p>
                    <p>Nyelv: {konyv.language}</p>
                    <p>Kiadás éve: {konyv.relaseYear}</p>
                    <p>Elérhető darabszám: {konyv.stockNumber+" db"}</p> 
                       
                  </div>
                </div>
              </div>
                            
                    )}
                </div>
            );
}
export default KonyvSinglePage;