import React from 'react'
import './experience.css'

function Experience() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'/>
  
            <ul class="timeline">
            
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">Bachelor of Technology (B.Tech)</span>
                            <span class="time-wrapper"><span class="time">2018 - present</span></span>
                        </div>
                        <div class="desc">
                        <h5 style={{fontSize: '20px'}}>Information Technology</h5> <br/>
                        CGPA: 8.21 <br/>
                        Coursework: Data Structure, Object Oriented Programming, Algorithms Design and Analysis, Software Engineering, Operating Systems, Databases, Web Engineering.
                        </div>
                    </div>
                </li>
                
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="flag">Follege Inc</span>
                            <span class="time-wrapper"><span class="time">2020 - 2021</span></span>
                        </div>
                        <div class="desc">
                        <h5 style={{fontSize: '20px'}}>Technical Operations</h5> <br/>
                        •Managed technology team, set performance goals, delegate and collaborate with a team of 5 members. <br/>
•Planned the use of technology within the company and strategized for the same. Conduct technical reviews of products or solutions. <br/>
•Released the Follege App on Google Play Store with more than 100 downloads in the first month. 
                        </div>
                    </div>
                </li>
            
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">IHS Markit</span>
                            <span class="time-wrapper"><span class="time">2021 - 2021</span></span>
                        </div>
                        <div class="desc">
                            <h5 style={{fontSize: '20px'}}>Software Engineering Intern</h5> <br/>
                        •Implemented Web APIs using ASP.NET Core, Repository Pattern and MVC Architecture successfully. <br/>
•Worked with Team Apollo on the products Market EyeQ and Enterprise EyeQ. <br/>
•Collaborated on more than 10 features with the team and wrote unit and integration tests for the same.
                        </div>
                    </div>
                </li>
                
            </ul>
            <br/><br/><br/><br/><br/><br/>
</div>  
    )
}

export default Experience
