import { Box, Button, Grid } from "@mui/material";
import styles from "../styles/components/Container.module.css";
import { ContextPags } from "../contexts/ContextsPags";
import { useContext } from "react";


export default function Projects ({val}) {

    const {projects} = useContext(ContextPags);
    const { html ,css ,boot, js , ts , react ,next ,} = useContext( ContextPags );
            

    return (
        <>     
            {html || css || boot || js || ts || react || next ?
                <Box key={projects[val].id} className={styles.container}>

                    <Box sx={{marginBottom: '2rem'}} className={styles.title}> 
                        <h1 key={projects[val].id}>{projects[val].nameSite}</h1 >
                        <p key={projects[val].id}>{projects[val].descricao}</p>
                    </Box>

                    <Grid container spacing={2} >
                        <Grid  >
                            <Box key={projects[val].id}>
                                <Box className={styles.page}>
                                    <iframe title="pages" src={projects[val].iframeSite}/>
                                </Box>

                                <Button 
                                    onClick={() => {window.open(projects[val].iframeSite)}}
                                    variant="text" 
                                    size="large"
                                    className={styles.button}> 
                                        Link do Site
                                </Button>
                            </Box>
                        </Grid>

                        <Grid >
                            <Box className={styles.codigs}>
                                <Box className={styles.spaceCodigs}>
                                    <h1>Codigo fonte </h1>
                                    <pre>
                                        <code>
                                            Teste
                                        </code>
                                    </pre>
                                </Box>
                                <Box className={styles.codigButton}>
                                    <Button variant="contained"  className={styles.cod}>HTML</Button>
                                    <Button variant="contained"  className={styles.cod}>CSS</Button>
                                    <Button variant="contained"  className={styles.cod}>JS</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                :
                projects.map((e =>  

                    <Box key={e.id} className={styles.container}>
                        <Box sx={{marginBottom: '2rem'}} className={styles.title}> 
                            <h1 key={e.id}>{e.nameSite}</h1 >
                            <p key={e.id}>{e.descricao}</p>
                        </Box>
    
                        <Grid  className={styles.box} >
                            <Grid   >
                                <Box key={e.id}>
                                    <Box className={styles.page} > 
                                        <iframe title="pages" src={e.iframeSite}/>
                                    </Box>
    
                                    <Button 
                                        onClick={() => {window.open(e.iframeSite)}}
                                        variant="text" 
                                        size="large"
                                        className={styles.button}> 
                                            Link do Site
                                    </Button>
                                </Box>
                            </Grid>
    
                            <Grid >
                                <Box className={styles.codigs}>
                                    <Box className={styles.spaceCodigs}>
                                        <h1>Codigo fonte </h1>
                                        <pre>
                                            <code>
                                                Teste
                                            </code>
                                        </pre>
                                    </Box>
                                    <Box className={styles.codigButton}>
                                        <Button variant="contained"  className={styles.cod}>HTML</Button>
                                        <Button variant="contained"  className={styles.cod}>CSS</Button>
                                        <Button variant="contained"  className={styles.cod}>JS</Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                ))
            }
        </>
    )
}