import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-education" data-section="education">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Education</span>
					
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div class="fancy-collapse-panel">
								<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingOne">
									        <h4 class="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">University of Texas at Dallas , USA - MS
									            </a>
									        </h4>
									    </div>
									    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									         <div class="panel-body">
									            <div class="row">
										      		<div class="col-md-8">
										      			<p>I am pursing my master of science in computer science at the University of Texas at Dallas.</p>
										      		</div>
                                                   
										      		<div class="col-md-4">
										      			<p>August 2019 - present</p>
										      		</div>
										      	</div>
									         </div>
									    </div>
									</div>
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingTwo">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Vellore Institute of Technology , Vellore , India - BS
									            </a>
									        </h4>
									    </div>
									    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
									        <div class="panel-body">
                                            <div class="row">
										      		<div class="col-md-8">
										      			<p>I pursued my bachelor of science in computer science at the VIT University, Vellore</p>
										      		</div>
                                                   
										      		<div class="col-md-4">
										      			<p>July 2014 - April 2018</p>
										      		</div>
										      	</div>
									        </div>
									    </div>
									</div>
	
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}
