import React, { useRef, useEffect } from 'react';
// import './ShakingCursorDiv.css';

const ShakingCursorDiv = () => {
    const divRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const div = divRef.current;
            const cursor = cursorRef.current;

            if (div && cursor) {
                const rect = div.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;

                cursor.style.left = `${mouseX}px`;
                cursor.style.top = `${mouseY}px`;
                cursor.style.display = 'block';

                // Ajoutez un effet de tremblement
                const randomX = (Math.random() - 0.5) * 30; // Ajustez la valeur pour plus ou moins de tremblement
                const randomY = (Math.random() - 0.5) * 30; // Ajustez la valeur pour plus ou moins de tremblement

                cursor.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }
        };

        const handleMouseLeave = () => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.style.display = 'none';
            }
        };

        const div = divRef.current;
        if (div) {
            div.addEventListener('mousemove', handleMouseMove);
            div.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (div) {
                div.removeEventListener('mousemove', handleMouseMove);
                div.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="shaking-cursor-div" ref={divRef}>
            <div className="custom-cursor" ref={cursorRef}></div>
            Passez votre souris ici pour voir le curseur trembler.
        </div>
    );
};

export default ShakingCursorDiv;