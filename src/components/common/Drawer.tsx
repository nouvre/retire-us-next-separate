import React from "react";
import Close from "@2fd/ant-design-icons/lib/Close";

interface DrawerProps {
    children: React.ReactNode | undefined;
    isOpen: boolean | undefined;
    handleClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, handleClose }) => {
    return (
        <main
            className={
                " fixed overflow-hidden h-screen bg-[#161616e6] bg-opacity-25 inset-0 transform ease-in-out z-[200] " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-100 -translate-x-0  "
                    : " transition-all opacity-0 -translate-x-full  ")
            }
        >
            <section
                className={
                    " w-screen right-0 absolute bg-transparent h-screen shadow-xl duration-100 ease-in-out transition-all transform  " +
                    (isOpen ? " -translate-x-0 " : " -translate-x-full ")
                }
            >
                <article className="relative w-screen pb-10 flex flex-col space-y-6 h-full">
                    <header className="w-full p-4 flex justify-end"><Close className="text-4xl text-white font-bold" onClick={() => {handleClose();}} /></header>
                    {children}
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
            ></section>
        </main>
    );
};

export default Drawer;
