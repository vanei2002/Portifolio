import { ReactNode } from "react";
import { createContext } from "react";
import { useState } from "react";


type ContextsFunction = {
    activeButton: boolean;
    html: boolean;
    css: boolean;
    boot: boolean;
    js: boolean;
    ts: boolean;
    react: boolean;
    next: boolean;
    setActiveButton: (value: boolean) => void;
    setHtml: (value: boolean) => void;
    setCss: (value: boolean) => void;
    setBoot: (value: boolean) => void;
    setJs: (value: boolean) => void;
    setTs: (value: boolean) => void;
    setReact: (value: boolean) => void;
    setNext: (value: boolean) => void;
    projects: object
}

type ContextsFunctionProps = {
    children: ReactNode;
}




export const projects = [
    {
        id:1,
        nameSite: 'Html',
        descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum recusandae molestias. Corporis recusandae corrupti placeat inventore ipsa quisquam nostrum. Consectetur ducimus facilis reiciendis. Nesciunt, eius! In repudiandae eaque recusandae.`,
        iframeSite:"https://jade-salamander-7ba94f.netlify.app/",
    },
    {
        id:2,
        nameSite: 'Css',
        descricao: "`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum recusandae molestias. Corporis recusandae corrupti placeat inventore ipsa quisquam nostrum. Consectetur ducimus facilis reiciendis. Nesciunt, eius! In repudiandae eaque recusandae.`",
        iframeSite:"https://elastic-shaw-0eb4e4.netlify.app/",
    },
    {
        id:3,
        nameSite: 'JavaScript',
        descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum recusandae molestias. Corporis recusandae corrupti placeat inventore ipsa quisquam nostrum. Consectetur ducimus facilis reiciendis. Nesciunt, eius! In repudiandae eaque recusandae.`,
        iframeSite:"https://golden-pithivier-ffbe38.netlify.app/html/fimdejogo",
    },
    {
        id:4,
        nameSite: 'BootStrap',
        descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum recusandae molestias. Corporis recusandae corrupti placeat inventore ipsa quisquam nostrum. Consectetur ducimus facilis reiciendis. Nesciunt, eius! In repudiandae eaque recusandae.`,
        iframeSite:"https://splendid-lollipop-8626e0.netlify.app/",
    },

    {
        id:5,
        nameSite: 'React Js',
        descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum recusandae molestias. Corporis recusandae corrupti placeat inventore ipsa quisquam nostrum. Consectetur ducimus facilis reiciendis. Nesciunt, eius! In repudiandae eaque recusandae.`,
        iframeSite:"",
    },
    {
        id:6,
        nameSite: 'Next Js',
        descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum recusandae molestias. Corporis recusandae corrupti placeat inventore ipsa quisquam nostrum. Consectetur ducimus facilis reiciendis. Nesciunt, eius! In repudiandae eaque recusandae.`,
        iframeSite:"",
    },

    {
        id:7,
        nameSite: 'TypeScript',
        descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum recusandae molestias. Corporis recusandae corrupti placeat inventore ipsa quisquam nostrum. Consectetur ducimus facilis reiciendis. Nesciunt, eius! In repudiandae eaque recusandae.`,
        iframeSite:"",
    },

]


export const ContextPags = createContext({} as ContextsFunction);


export function ContextPagsProvider( {children }: ContextsFunctionProps){

    const [html, setHtml] = useState(false);
    const [css, setCss] = useState(false);
    const [boot, setBoot] = useState(false);
    const [js, setJs] = useState(false);
    const [ts, setTs] = useState(false);
    const [react, setReact] = useState(false);
    const [next, setNext] = useState(false);

    const [activeButton, setActiveButton] = useState(false);


    return (
        <ContextPags.Provider value={{
            activeButton, setActiveButton, html, setHtml, css,setCss ,
            boot, setBoot,js, setJs, ts, setTs, react,setReact, next, setNext,
            projects,
        }}>

            {children}
            
        </ContextPags.Provider>
    );
}

