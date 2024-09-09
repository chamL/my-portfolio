import React, { useState } from "react";
function Skill() {


    return (
        <section className="skills_section">
            <div className="skills_container">
                <div className="skills_left">
                    <h2>Progress bars</h2>

                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        <div className="html_bar" style={{ width: '80%' }}> <p>HTML</p> </div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                        <div className="css_bar" style={{ width: '70%' }}> <p>CSS</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        <div className="javascript_bar" style={{ width: '50%' }}> <p>JAVASCRIPT</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                        <div className="java_bar" style={{ width: '30%' }}> <p>JAVA</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="react_bar" style={{ width: '25%' }}> <p>REACT</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                        <div className="mysql_bar" style={{ width: '40%' }}> <p>MySql</p> </div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                        <div className="tableu_bar" style={{ width: '30%' }}> <p>Tableu</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                        <div className="api_bar" style={{ width: '10%' }}> <p>Api</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                        <div className="pyton_bar" style={{ width: '30%' }}> <p>Pyton</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="github_bar" style={{ width: '25%' }}> <p>GitHub</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div className="typescript_bar" style={{ width: '0%' }}> <p>Typescript</p> </div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div className="azure_bar" style={{ width: '0%' }}> <p>Azure</p></div>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div className="swift_bar" style={{ width: '0%' }}> <p>Swift</p></div>
                    </div>

                </div>
                <div className="skills_right">
                    <p>Info on my progress</p>
                    <ul>
                        <li><span style={{ color: 'saddlebrown' }}>HTML</span> started 8/22</li>
                        <li><span style={{ color: 'lightpink' }}>CSS</span> started 8/22</li>
                        <li><span style={{ color: 'lightskyblue' }}>JavaScript</span> started 8/23</li>
                        <li><span style={{ color: 'darkslateblue' }}>Java</span> started 11/23</li>
                        <li><span style={{ color: 'tomato' }}>React</span> started 3/24</li>
                        <li><span style={{ color: 'teal' }}>MySql</span> started 8/23</li>
                        <li><span style={{ color: 'lightsalmon' }}>Tableu</span> started 4/24</li>
                        <li><span style={{ color: 'blue' }}>Pyton</span> Not started </li>
                        <li><span style={{ color: 'darkkhaki' }}>GitHub</span> started 8/23</li>
                        <li><span style={{ color: 'darkred' }}>Api</span> started 4/24</li>
                        <li><span style={{ color: 'white' }}>TypeScript</span> Not started</li>
                        <li><span style={{ color: 'lime' }}>Azure</span> Not started</li>
                        <li><span style={{ color: 'yellow' }}>Swift</span> Not started</li>
                    </ul>
                </div>
            </div>

        </section>

    );
}







export default Skill;

