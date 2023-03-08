import React, { useState, useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom';

export function KonyvGenrePage(props) {

    useEffect(() => {
        window.scrollTo({
          top: 1600,
          left: 1000,
          behavior: "instant"
        });
      }, []);


    const params = useParams();
    const id = params.genreId;
    const[konyv,setkonyv] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`https://localhost:7280/Book/Genre_book/${id}`)
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
       
        <div  >

            {isPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {konyv.map((konyv,genre)=>(
                        
                        <div className="col" key={genre}>
                        <div id='cardbodycolor' className="card h-100">
                          
                          <NavLink key={konyv.genreId} to={"../Book/Genre_book/" + konyv.genreId}>
                                                      <img alt={konyv.cim}
                                                      title="img" className="card-img-top"
                                                      style={{maxWidth:280,maxHeight:320,paddingTop:5}}
                                                      src={konyv.cover ? konyv.cover : 
                                                      "https://via.placeholder.com/400x800"} 
                                                      />
                                                      </NavLink>
                          
                          <div className="card-body" style={{Height:400}}  >  
                          <p id="cardfont" className="card-title">{konyv.author} </p>
                          <p id="cardtitle" className="card-title">{konyv.title } </p>
                          
                          <p id="cardfont" className="text-dark">Készleten: {konyv.stockNumber} db</p>
                            <p id="cardfont" className="text-dark">Ára: {konyv.price} Ft</p>
                            <button  type="button" className="btn btn-success btn-rounded">Kosárba</button>
                          
                          </div>
                        </div>
                      </div>
                      
                        
                    ))}
                </div>
            )}
        </div>
    );
}
export default KonyvGenrePage;