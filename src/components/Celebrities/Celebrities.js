import React, { useEffect, useState } from 'react';
import Celebrity from '../Celebrity.js/Celebrity';
import InviteSummary from '../InviteSummary/InviteSummary';
import './Celebrities.css'

const Celebrities = () => {

    const [celebrities, setCelebraties] = useState([])
    useEffect(() => {
        fetch('./Celebrities.json')
            .then(res => res.json())
            .then(data => setCelebraties(data))
    }, []);

    const [inviteCelebrities, setInviteCelebritries] = useState([])
    const invitePersonList = (celebrity) => {
        // console.log(celebrity)
        const newlist = [...inviteCelebrities, celebrity];
        setInviteCelebritries(newlist)
        // console.log(newlist)

    }
    return (
        <>
            <div className="highlight">
                <h1>Invite A Celebrity To Our Event</h1>
                <h3>Total Budget: 1.5M</h3>
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