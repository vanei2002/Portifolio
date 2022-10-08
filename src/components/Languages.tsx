import Projects from "./Projects"
import { ContextPags } from "../contexts/ContextsPags"
import { useContext } from "react"
import { Box } from "@mui/material"


export default function Languages(){

    
    const { html ,css ,boot, js , ts , react ,next ,} = useContext( ContextPags );
    
    return(

        <Box >

            { html || css || boot || js || ts || react || next ? 
                
                <>
                    {html == true ? <Projects val={0} /> : ''}
                    {css == true ? <Projects val={1} /> : ''}
                    {js == true ? <Projects val={2} /> : ''}
                    {boot == true ? <Projects val={3} />  : ''}
                    {ts == true ? <Projects val={4} />  : ''}
                    {react == true ? <Projects val={5} />  : ''}
                    {next == true ? <Projects val={6} />  : ''}
                </>
                :
                <>
                    <Projects val={0}/> 
                </> 
            }
                
        </Box>
        

    )
}