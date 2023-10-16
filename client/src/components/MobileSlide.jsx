import React from 'react';

function MobileSlide({ children, open, setOpen }) {
  return (
    <>
      <div onClick={()=>setOpen(false)} className={"mobile-slide_background fixed z-[11] left-0 top-0 w-full bg-black transition-opacity "+(open ? 'opacity-50 h-full' : 'opacity-0 h-0')}></div>
      <div className={"mobile-slide_foreground fixed z-[12] left-0 bottom-0 rounded-t-lg w-full bg-white transition-all "+(open ? 'h-[80vh]' : 'h-0')}>
        <button onClick={()=>setOpen(false)} className="mobile-slide_foreground_gray-line block w-full py-4">
          <div className='w-10 h-1 mx-auto bg-lybas-gray rounded-full'></div>
        </button>
        {children}
      </div>
    </>
  );
}

export default MobileSlide;
