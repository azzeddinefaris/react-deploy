import React from 'react';
import{Grid} from 'react-mdl';

class Accueil extends React.Component{
     render(){
         return(
             <div>
                 <Grid className="grid-style">

                         <div className="container-fluid mt-5 p-0 w-100">
                             <div className="card bg-black text-light  col-md-8 offset-2">
                                 <div className="row">
                                    <div className="col-md-6 align-self-center">
                                        <img className="img-fluid w-75" src={require('./images/1V7A9554BQ.png')} alt="photo de profil"/>
                                    </div>
                                     <div className="col-md-6">
                                         <img className="w-50 align-self-content" src={require('./images/white_logo.png')}
                                              alt="logo"/>
                                         <hr/>
                                         <p className="my-auto"> Php/Laravel </p>|<p
                                         className=" my-auto"> JavaScript/ReactJS/Angular </p>|<p
                                         className=""> MySQL/FireBase </p>
                                         <div className="resaux-sociaux">
                                             {/*twiter link*/}
                                             <a href="https://www.linkedin.com/in/azzeddine-faris-475a2414b/"><i
                                                 className="fab fa-linkedin" target="_blank"></i></a>
                                             {/*github link*/}
                                             <a href="https://github.com/farisazzeddine"><i className="fab fa-github-square"
                                                                                            target="_blank"></i></a>
                                             {/*linkedin link */}
                                             <a href="https://twitter.com/azzedinefaris"><i className="fab fa-twitter-square"
                                                                                            target="_blank"></i></a>
                                         </div>
                                    </div>

                                 </div>


                             </div>

                         </div>


                 
                    
                 </Grid>
             </div>
         )
     }
}
export default Accueil;