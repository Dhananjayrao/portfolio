import React from 'react'

const Infotile = ({tileTitle, tileContent, img, date}) => {
  return (
    <div className='tile-bg bd-btm'>
        <div className='sub-title'>
            <h3 className='title-highlight'>{tileTitle}</h3>
            <h4 className='title-highlight'>{date}</h4>
        </div>
        {img?<img src={img} className='image-styling' alt='snapshot of project interface'/>:<></>}
        {tileContent.map((point,ind)=>{
            return (
                <div>
                <div key={ind} className='point-styling'>
                    <p>{point}</p>
                </div>
                </div>
            )
        })}
    </div>
  )
}

export default Infotile