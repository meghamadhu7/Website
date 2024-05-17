import React from 'react'

import"./Topcontent.css";

const Topcontent = () => {
  return (
    <div className='topcontent' id='Home'>
        <div className='topcontent_container'>
            <h1> CARA <span>BOUTIQUE</span></h1>
            <p> Fashion is what you buy,Style is what you Do with it.</p>
          <a>
              <button className='topcontent_downloadButton'>Shop Now</button>
            
            
              <button className='topcontent_workbutton'>Learn Now</button>
            </a>
            

        </div>
        

    </div>
  )
}

export default Topcontent;