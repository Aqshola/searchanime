import React from 'react';
import CardCom from './card'


const CardList = ({ info, data, click, }) => {
    try {
        return (
            <div className="data-content mx-auto ">{
                data.map((el, i) => {
                        return (
                            <CardCom key={i} info={info} data={data[i]} />
                        )
                })
            }
            </div>
        )
    }
    catch (err) {
        console.log(err)
        return (
            <h1 className="err-msg">not found</h1>
        )
    }
}
export default CardList;