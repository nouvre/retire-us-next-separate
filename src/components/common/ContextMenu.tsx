import React, { useState, useEffect, useRef } from 'react';

interface ComponentProps {
    children: React.ReactElement;
    menu: React.ReactElement;
}
const ContextMenu: React.FC<ComponentProps> = ({ children, menu }) => {
    const [isShown, setIsShown] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const showContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsShown(false);
        const newPosition = {
            x: event.pageX,
            y: event.pageY,
        };
        setPosition(newPosition);
        setIsShown(true);
    };
    const hideContextMenu = () => {
        setIsShown(false);
    };
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (isShown) {
                if (ref.current && !ref.current.contains(event.target)) {
                    hideContextMenu();
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, isShown]);

    return (
        <div
            className="container"
            onContextMenu={showContextMenu}
            onClick={hideContextMenu}
            ref={ref}
        >
            {children}
            {isShown && (
                <div
                    style={{ top: position.y, left: position.x }}
                    className="fixed z-10 shadow-context bg-white py-1"
                >
                    {menu}
                </div>
            )}
        </div>
    );

}

export default ContextMenu