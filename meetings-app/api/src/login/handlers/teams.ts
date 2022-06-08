



import { getConnection } from "../../db";

async function teamsHandler(req, res, next) {
  const result = await getTeams();
  return res.status(200).json(result);
}

async function getTeams() {
  const query = getTeamsQuery();
  const [result] = await getConnection().execute(query);
  console.log(result);
  console.log(
    
  );
  return result;
}

const getTeamsQuery = () => {
  return `SELECT * FROM shoppingapp.teams;`;
};


async function meetingsHandler(req, res, next) {
  const result = await getMeetings(req.params.id);
  return res.status(200).json(result);
}

async function getMeetings(id) {
  const query = getMeetingsQuery();
  const [result] = await getConnection().execute(query, [id]);
  console.log(result);
 
  
  return result;
}

const getMeetingsQuery = () => {
  return `SELECT * FROM shoppingapp.meeting
    LEFT JOIN shoppingapp.teams
    ON shoppingapp.meeting.team_id = shoppingapp.teams.team_id
    WHERE (shoppingapp.teams.team_id = ?)`;
};



async function saveMeeting(req, res, next) {
  console.log(req.body);
  await addMeeting(req.body);
  return res.status(200).json({ message: "success" });
}

async function addMeeting(payload) {
  const {
    meating_id,
    team_id,
    start_date,
      end_date,
    room,
   
  } = payload;
  const query = addMeetingQuery();
  const [result] = await getConnection().execute(query, [
    meating_id,
    team_id,
    start_date,
    end_date,
    room,
  ]);
  
  
  return result;
}

const addMeetingQuery = () => {
  return `INSERT INTO shoppingapp.meeting (team_id, start_date, end_date, room) VALUES (?, ?, ?, ?);
`;
};

export { saveMeeting, teamsHandler, meetingsHandler };
