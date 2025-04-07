


import { ReactNode } from 'react';
import './OverlayCard.scss';

export default function OverlayCard({ children, onClose }: { children: ReactNode | ReactNode[], onClose: () => void }) {

    // useEffect(() => {
    //     const block = (e: Event) => {
    //       console.log(`e`, e)
    //       // e.stopPropagation();
    //       // e.preventDefault();
    //     };
      
    //     const options = { passive: false, capture: true }; // capture: true is equivalent to `true` in your current usage
      
    //     window.addEventListener('mousedown', block, options);
    //     window.addEventListener('touchstart', block, options);
    //     window.addEventListener('pointerdown', block, options);
      
    //     return () => {
    //       window.removeEventListener('mousedown', block, options);
    //       window.removeEventListener('touchstart', block, options);
    //       window.removeEventListener('pointerdown', block, options);
    //     };
    //   }, []);
      
    return (
        <div className="overlay-container" >
           
            <div className="overlay-card">
                {children}
                <button className="close-button" onClick={onClose} onTouchStart={onClose} >✖</button>
            </div>
        </div>
    );
}