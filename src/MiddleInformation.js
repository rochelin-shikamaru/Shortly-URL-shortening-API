import React from 'react';
import brandIcon from './images/icon-brand-recognition.svg';
import recordIcon from './images/icon-detailed-records.svg';
import customizableIcon from './images/icon-fully-customizable.svg';


const MiddleInformation = (props) => {
    
    
    const {dataLink, setDataLink} = props;



    const handleCopy = (event, id) => {
        navigator.clipboard.writeText(event.target.value).then(
            () => setDataLink(prev => prev.map(item => {
                return item.id === id ? {...item, isCopy: true} : {...item}
            }))
        );
    }

    

    return (
        <section className='middleInfo'>
            <div className="middleInfo__shorter">
                {dataLink.length > 0 && dataLink.map((item, index) => {
                    return <div key={index} className="middleInfo__shorter__container">
                                <p>{item.original_link.length > 60 ? item.original_link.slice(0, 50) + "..." : item.original_link}</p>
                                <div className="middleInfo__shorter__container__shortLink">
                                    <p>
                                        {item.short_link}
                                    </p>
                                    <button 
                                        onClick={(event) => handleCopy(event, item.id)} 
                                        value={item.short_link}
                                        className={item.isCopy ? "button--copied" : undefined}
                                        >{!item.isCopy ? "Copy" : "Copied"}</button>
                                </div>
                            </div>
                
                })}
            </div>
            <div className='middleInfo__information'>
                <h2>Advanced Statistics</h2>
                <p>
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </div>
            <div className='middleInfo__cart'>
                <div className='middleInfo__cart__information'>
                    <h4>Brand Recognition</h4>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                    <div className='middleInfo__cart__information--icon'>
                        <img src={brandIcon} alt="brand icon"/>
                    </div>
                </div>
                <div className='middleInfo__cart__information'>
                    <h4>Detailed Records</h4>
                    <p>
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                    </p>
                    <div className='middleInfo__cart__information--icon'>
                        <img src={recordIcon} alt="record icon"/>
                    </div>
                </div>
                <div className='middleInfo__cart__information'>
                    <h4>Fully Customizable</h4>
                    <p>
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.
                    </p>
                    <div className='middleInfo__cart__information--icon'>
                        <img src={customizableIcon} alt="record icon"/>
                    </div>
                </div>
                <div className='middleInfo__cart__border'></div>
            </div>
        </section>
    )
}

export default MiddleInformation