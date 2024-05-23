import React,{useRef,useEffect} from 'react';
import Infotile from './Infotile';
import Contact from './Contact';

const Info = ({compid,title,infoContent}) => {
    const ref=useRef(null)
    useEffect(()=>{
        const observer= new IntersectionObserver((entries) => 
        {entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
                }
            })
        })
        observer.observe(ref.current)
        return()=>observer.disconnect();

    },[]);
    return (
        <div id={compid} ref={ref} className='info-section section-bg hidden'>
            <h2>{title}</h2>
            {infoContent?(infoContent).map((item,ind)=>{
                return <Infotile tileTitle={item.name} tileContent={item.desc} img={item.img?item.img:null} date={item.date?item.date:null} key={ind} />
                
            }):
            <Contact/>
            }
        </div>
    )
}

export default Info