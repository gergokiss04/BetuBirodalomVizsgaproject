import React from "react";
import { useEffect,useState } from "react";

export function KonyvRecommendation(props)
{
    const[konyvrecommendation,setkonyvrecommendation]=useState([]);
    const [randomId, setRandomId] = useState(null);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        if (!randomId) {
          setRandomId(Math.floor(Math.random() * 80) + 1);
        } else {
          fetch(`https://localhost:7280/Book/${randomId}`)
            .then((response) => response.json())
            .then((data) => setkonyvrecommendation(data));
        }
      }, [randomId]);

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || konyvrecommendation.randomId ? (
                <div className="spinner-border"></div>
            ) : (
                            
              <div className="container">
              <div className="row">
                  <h1>Könyvajánló</h1>
                  <hr></hr>
                <div  className="col-xs-1 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <img className="img-fluid image-container" alt={konyvrecommendation.title}
                                          style={{maxHeight: 500}}
                                          src={konyvrecommendation.cover ? konyvrecommendation.cover : 
                                          "https://via.placeholder.com/400x800"} 
                                          />
      
                </div>
                <div className="col-xs-1 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                  <h3>{konyvrecommendation.author+": "+konyvrecommendation.title}</h3>
                  <p>{konyvrecommendation.description}</p>
                  <p>Ára: {konyvrecommendation.price} Ft</p>
                  
                  <button id="regisztralcio" type="button" className="btn btn-success btn-rounded">Megveszem</button>  
                </div>
                
              </div>
            </div>
                        
                    )}
                </div>
            );
}
               

export default KonyvRecommendation;
