import React from 'react'
import Square from '../../Components/Square'
import "./style.css"


export default function FreeGamePage() {


    let a = []
    for (let i =0; i<10; i++){
        let b = []
        // a.push(<div className="row"></div>)
        for(let j=0; j<10; j++){
            b.push(<div className="col col-1"><Square/></div>)
        }
        a.push(<div className="row">{b}</div>)
        b=[]
    }


    return (
        <div className="FreeGamePage">
                <div className="title">
                <h3>Free Game Page</h3>
                </div>
                <div className="container">
                    <div>{a}</div>
                </div>                  
        </div>
)
}