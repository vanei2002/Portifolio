import style from '../styles/components/NaveBar.module.css'
import { useContext } from 'react'
import { ContextPags } from '../contexts/ContextsPags';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SocialDistanceIcon from '@mui/icons-material/SocialDistance'
import ContactsIcon from '@mui/icons-material/Contacts';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar } from '@mui/material';




const  NaveBar = () => {

    const {activeButton , setActiveButton} = useContext( ContextPags );
    const GitHub = () => window.open('https://github.com/vanei2002') 

    return (

        <div className={ `${style.naveBarContainer} ${activeButton ? style.naveBarColorBlack : style.naveBarColorWhite}`}>

            <a href="" className={`${style.braind } ${activeButton ?  style.braindAct : " "}` }>
                <strong className='working'>Net</strong>
                <strong className='working'>Working</strong>
            </a>

            <nav className={style.naveBar}>
                <ul>
                    <li><a href=""><HomeIcon/> Home</a></li>
                    <li><a href=""><ContactMailIcon sx={{marginRight: 1}}/>  Sobre </a></li>
                    <li><a href=""><SocialDistanceIcon sx={{marginRight: 1}}/> Projetos </a></li>
                    <li><a href=""><ContactsIcon  sx={{marginRight: 1}}/> Contato</a></li>
                </ul>
            </nav>


            <div className={style.naveIcon}>       
                <BrightnessMediumIcon sx={{fontSize: 35}}
                onClick={() => setActiveButton(!activeButton)}/>    
                
                <GitHubIcon 
                onClick={GitHub}
                sx={{fontSize: 33 , marginLeft: 1}} />

                <Avatar
                    alt="Vanei Mendes"
                    src="https://github.com/vanei2002.png"
                    sx={{ marginLeft: 1}}
                />


            </div>

        </div>
    )
}

export default NaveBar;