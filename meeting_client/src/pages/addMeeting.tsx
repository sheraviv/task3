import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import axios from "axios";









function Addmeeting() {
    const [meeting_id, SetMeeting_id] = useState('');
    const [team_id, setTeam_id] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');
    const [room, setRoom] = useState('');
    


    const sendButtonHandler = async () => {
        const payload = {
            meeting_id: meeting_id,
            team_id: team_id,
            start_date: start_date,
            end_date: end_date,
            room:room
            
        }
        try {
            const { data } = await axios.post(`http://localhost:3300/addmeeting`, payload)
            console.log(data)
            setTeam_id('')
            SetMeeting_id('')
            setStart_date('')
            setEnd_date('')
            setRoom('')
            
            return data

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="center-align">Add Meetings</h1>
                    <div>
                        <TextField value={team_id} className="col m12" label="id" variant="outlined"
                            onChange={(e) => setTeam_id(e.target.value)} /><br />
                        <TextField value={ meeting_id} className="col m12" label="start_meeting" variant="outlined"
                            onChange={(e) => SetMeeting_id(e.target.value)} /><br />
                        <TextField value={ start_date} className="col m12" label="end_meeting" variant="outlined"
                            onChange={(e) => setStart_date(e.target.value)} /><br />


                        <TextField value={end_date} className="col m12" label="meeting_description" variant="outlined"
                            onChange={(e) => setEnd_date(e.target.value)} /><br />
                        <TextField value={room} className="col m12" label="meeting_date" variant="outlined"
                            onChange={(e) => setRoom(e.target.value)} /><br />
                        



                        <Button className="col s12 m6 offset-m3 l4 offset-l4 " variant="contained"
                            onClick={sendButtonHandler}>Send</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export { Addmeeting };




