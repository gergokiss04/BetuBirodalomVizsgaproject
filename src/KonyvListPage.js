import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export function KonyvListPage() {
    const[books, setbooks] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);
    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:7280/Book/All_books")
            .then((res) => res.json())
            .then((bookss) => setbooks(bookss))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);
    return (
       
        <div  >

            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {books.map((konyv,list)=>(
                        
                        <div className="col" key={list}>
                            
                        <div id='cardbodycolor' className="card h-100">
                          
                          <NavLink key={konyv.bookId} to={"/Book/" + konyv.bookId}>
                                                      <img  alt={konyv.cim}
                                                      className="card-img-top"
                                                      style={{maxWidth:280,maxHeight:320,paddingTop:5}}
                                                      src={"../"+konyv.cover ? konyv.cover : 
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
export default KonyvListPage;