import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Introtext = () => {
  return (
    <div className='text-white text-[20px] flex justify-center'>
      <TypeAnimation
        sequence={[
          'Feel the forecast', 
          2000, 
          'Trust the Atmosense', 
          2000,
          '', 
          () => {
          
          }
        ]}
        speed={50} 
        repeat={Infinity} 
        style={{ display: 'inline-block' }}
        cursor={true} 
      />
    </div>
  );
};

export default Introtext;