import React from 'react'

export default function Newsdetails(props) {
    const renderlist = props.usertext.map((data)=>{
        return(
            <div>
                <h3>{data.title}</h3>
                <img src={data.imageUrl} alt=""/>
                <h3>{data.feed}</h3>
            </div>
        )
    })
    return (
        <div>
          {renderlist}
        </div>
    )
}
