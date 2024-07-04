import PropTypes from "prop-types";
import Lottie from 'lottie-react';


function IconAnimate({ animation, width, height, loop = true, autoplay }) {
    const lottieOptions = {
        animationData: animation,
        loop: loop,
        autoplay: false, // autoplay should be false by default

        interactivity: {
            mode: 'cursor',
            actions: [
                {
                    // position: { x: [0, 1], y: [0, 1] },
                    type: 'hover',
                    forceFlag: true,
                },
            ],
        },
    };
    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <div style={{ width: width, height: height }}>
            <Lottie {...lottieOptions} style={{ width: '100%', height: '100%' }} />
        </div>
    );

};
IconAnimate.propTypes = {
    animation: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
};
export default IconAnimate;
