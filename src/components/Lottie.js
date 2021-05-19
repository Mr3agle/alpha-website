import * as React from 'react'
import Lottie from 'react-lottie'

function LottieAnim({src, width, height, loop}) {
    
    const defaultOptions = {
        loop: loop,
        autoplay: true, 
        animationData: src,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie style={{
                pointerEvents : "none"
            }} options={defaultOptions} height={height} width={width}/>
        </div>
    )
    
}

export default LottieAnim
