import React, { Component } from 'react'

class Certifcation extends Component {
    render() {
        return (

            <section className="colorlib-about" data-section="certifcations">
                <div class="colorlib-narrow-content">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <span class="heading-meta">Certifications</span>
                            <h2 class="colorlib-heading animate-box fadeInUp animated">Certifications</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col -xs-12 col-sm-6 col-md-3 ">
                            <img src="https://evoila.com/wp-content/uploads/2023/11/microsoft-certified-azure-developer-associate-300x300.png" class="img-responsive"></img>
                            <a href="blog.html" class="blog-img"></a>
                        </div>
                        <div class="col-xs-10 col-md-6 animate-box">
                            <dl class="dl-horizontal">
                                <br></br><br></br>
                                <h2 >Microsoft Certified<br></br>
                                    <strong><a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/?practice-assessment-type=certification">Azure Developer Associate</a></strong></h2>
                                <p><br></br></p>
                            </dl>
                        </div>
                    </div><br></br><br></br>
                </div>
            </section>

        )
    }
}

export default Certifcation;