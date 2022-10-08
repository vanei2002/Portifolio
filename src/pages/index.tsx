import { useContext } from "react";
import Languages from "../components/Languages";
import NaveBar from "../components/NaveBar";
import { ContextPags } from "../contexts/ContextsPags";
import style from "../styles/pages/index.module.css";


export default function Home() {

  const {activeButton} = useContext( ContextPags );
  
  const { html , setHtml , css , setCss, boot, setBoot, js , setJs, ts , setTs, react , setReact, next , setNext, 
  } = useContext( ContextPags );

  
  return (
    <>
      <main className={activeButton ? `${style.black}` : ''}>

        <header>
          <NaveBar /> 
        </header>

        <section className={style.mensege}>
           <h1>Sejá Bem-Vindo </h1>
        </section>

        <section className={style.logo}>
            <img src="images/logo-Ini.gif" />
        </section>
      

        <section className={style.sectionLanguagens}>
          <nav className={style.LanguagensContainer} >
            <h1>Apresent Linguages </h1>

            <ul className={activeButton ? style.bar : " "}>
              <button onClick={() => setHtml(!html)}> <img src="images/html.gif" alt="dsd" /></button>
              <button onClick={() => setCss(!css)}> <img src="images/css.gif" alt="" /></button>
              <button onClick={() => setBoot(!boot)}> <img src="images/boot.gif" alt="" /></button>
              <button onClick={() => setJs(!js)}><img src="images/js.gif" alt="" /></button>
              <button onClick={() => setTs(!ts)}><img src="images/typeScript.gif" alt="" /></button>
              <button onClick={() => setReact(!react)}><img src="images/react.gif" alt="" /></button>
              <button onClick={() => setNext(!next)}> <img src="images/next.gif" alt="" /></button>
            </ul>
          </nav>
        </section>
        
        <section className={style.languagens}>
          <Languages /> 
        </section>

      </main>

    </>
  )
}
