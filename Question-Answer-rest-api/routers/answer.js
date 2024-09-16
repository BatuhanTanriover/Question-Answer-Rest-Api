const express = require("express");
const {getAccessToRoute,getAnswerOwnerAccess} = require("../middlewares/authorization/auth");
const {addNewAnswerToQuestion,getAllAnswersByQuestion,getSingleAnswer,editAnswer,deleteAnswer,
    likeAnswer,
unlikeAnswer} = require("../controllers/answer");
const {checkQuestionAndAnswerExist} = require("../middlewares/database/databaseErrorHelpers");
const router = express.Router({mergeParams:true});



router.post("/",getAccessToRoute,addNewAnswerToQuestion);
router.get("/",getAllAnswersByQuestion)
router.get("/:answer_id",checkQuestionAndAnswerExist,getSingleAnswer);
router.put("/:answer_id/edit",[checkQuestionAndAnswerExist,getAccessToRoute,getAnswerOwnerAccess],editAnswer)
router.delete("/:answer_id/delete",[checkQuestionAndAnswerExist,getAccessToRoute,getAnswerOwnerAccess],deleteAnswer)
router.get("/:answer_id/like",[getAccessToRoute,checkQuestionAndAnswerExist],likeAnswer);
router.get("/:answer_id/unlike",[getAccessToRoute,checkQuestionAndAnswerExist],unlikeAnswer);






module.exports = router ;