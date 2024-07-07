import React, { Component } from 'react'
import ProjectPopUp from './ProjectPopUp'

class Projects extends Component {

   render() {
      return (
         <section className="colorlib-about" data-section="projects">
            <div className="colorlib-narrow-content">
               <div class="row">
                  <div class="col-xs-12 .col-sm-8 .col-md-8 animate-box fadeInUp animated"><br></br>
                     <p><a href="https://docs.google.com/document/d/1SesGO4zxln-IU7U_Do0mIAd_i_TNTromXNHROTxDBfc/edit?usp=sharing" class="btn btn-primary btn-lg btn-load-more" target="_blank"  ><strong>View/Download Resume </strong><i class="icon-download"></i></a></p>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}

export default Projects;