import React, { useEffect, useState } from 'react';
import Celebrity from '../Celebrity.js/Celebrity';
import InviteSummary from '../InviteSummary/InviteSummary';
import './Celebrities.css'

const Celebrities = () => {

    // Load Data 
    const [celebrities, setCelebraties] = useState([])
    useEffect(() => {
        fetch('./Celebrities.json')
            .then(res => res.json())
            .then(data => setCelebraties(data))
    }, []);

    const [inviteCelebrities, setInviteCelebritries] = useState([])


    // contain single celebrity name 

    const [singlesName, setSinglesName] = useState([])

    const invitePersonList = (celebrity) => {
        // console.log(celebrity)


        const newlist = [...inviteCelebrities];

        // checking dubles name 
        const celebrityName = [...singlesName];

        // ignore dobules name
        if (celebrityName.indexOf(celebrity.name) === -1) {
            celebrityName.push(celebrity.name);
            newlist.push(celebrity)


        }
        setInviteCelebritries(newlist)
        setSinglesName(celebrityName)



    }
    return (
        <>
            <div className="highlight">
                <h1>Invite A Celebrity To Our Event</h1>
                <h2>Total Budget: 2.0M</h2>
            </div>
            <div className="container">
                <div className="celebrites">
                    {
                        celebrities.map(celebrity => <Celebrity key={celebrity.id}
                            invitePersonList={invitePersonList}
                            celebrity={celebrity} />)
                    }
                </div>

                {/* invite summary  */}
                <div>
                    <div className="summary">

                        <InviteSummary inviteCelebrities={inviteCelebrities}></InviteSummary>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Celebrities;