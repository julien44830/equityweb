import Lottie from 'react-lottie';


const IconAnimate = ({ animationData, height = 100, width = 100, loop = true, autoplay = true }) => {
    return (
        <Lottie
            animationData={animationData}
            loop={loop}
            autoplay={autoplay}
            style={{ height: height, width: width }}
        />
    );
};

export default IconAnimate;
