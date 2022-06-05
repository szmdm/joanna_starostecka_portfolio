import React from 'react'
import { BiggerContainerGilette, BCGOne, BCGTwo, SmallerContainerGilette, SCGOne, SCGTwo } from './projectDoneStyle'
import BCGOne_1 from "../../assets/projectsDone/pDGillette/IPad_01-1.png"
import BCGTwo_1 from "../../assets/projectsDone/pDGillette/Gillette_logo_02-1.png"

const ProjectDoneGilette = () => {
    return (
        <>
            <BiggerContainerGilette>
                <BCGOne>
                    <div className='BCGOneContainer'>
                        <img src={BCGOne_1} alt="content presented on tablet" />
                    </div>
                </BCGOne>
                <BCGTwo>
                    <div className='BCGTwoContainer'>
                        <div className='BCGTwoHead'>
                            <img src={BCGTwo_1} alt="gillette logo" />
                            <span>The Best a man can get</span>
                        </div>
                        <div className='BCGTwoContent'>
                            <p1>Landingpage for campagne</p1>
                            <span>Becoming the best doesn’t happen overnight. There’s always room for improvement.</span>
                        </div>
                    </div>
                </BCGTwo>
            </BiggerContainerGilette>
            <SmallerContainerGilette>
                <SCGOne>

                </SCGOne>
                <SCGTwo>

                </SCGTwo>
            </SmallerContainerGilette>
        </>
    )
}

export default ProjectDoneGilette