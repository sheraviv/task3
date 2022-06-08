import { meetingsHandler,  saveMeeting, teamsHandler } from "../handlers/teams";

const express = require("express");
const router = express.Router();



router.get("/meetings/:id", meetingsHandler);

router.get("/teams", teamsHandler);

router.post("/addmeeting", saveMeeting);


export default router;
