import React from 'react';
import '../Help/index.css';

function index() {
 return (
  <div className='container store_help py-3'>
   <h4>Some help</h4>
   <p>Here are some quick guides to get you started</p>
   <div className='store_help_block py-2'>

    {/* col1 */}
    <img
     className='store_help_block_img'
     src={process.env.PUBLIC_URL + "/assets/help_img.png"} />

    {/* col2 */}
    <div className='store_help_block_card'>
     {/* col1 */}
     <img
      className='store_help_block_card_img'
      src={process.env.PUBLIC_URL + "/assets/store_help_block_img.png"} />
     {/* col2 */}
     <div className='store_help_block_card_header_title'>
      <h4 className='px-3'>Learn how to use block on your project</h4>
      <div className='store_help_block_card_header_title_subtitle'>
       <span>Princelab, Inc.</span>
       <button className='btn btn-primary py-0 h6'>Learn now</button>
      </div><hr />
      <span>
       With a powerful Apple‑designed H1 chip in each cup, our custom acoustic design, and advanced software,
       AirPods Max use computational audio to create a breakthrough listening experience. By tapping into each
       chip’s 10 audio cores, computational audio helps block outside noise, adapts audio to the fit and seal of
       your ear cushions, and makes movie scenes sound like they’re happening all around you. With a powerful
       Apple‑designed H1 chip in each cup, our custom acoustic design, and
      </span>
     </div>
    </div>
   </div>
  </div>
 )
}

export default index