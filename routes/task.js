const express=require("express")
const router=express.Router()
const TaskSchema=require("../model/taskmodel")

router.post("/add",(req,res)=>{
    const task = new TaskSchema({
        user:req.body.username,
        title:req.body.title,
        description:req.body.description,
        status:req.body.status,
        deadline:req.body.deadline
    })
    task.save()
    .then((title)=>{
        res.status(200).json({
            newtask:title
        })
    })
    .catch((err)=>{
        res.status(500).json({
            error:"Error in adding the data" + err
        })
    })
})

router.post("/update",(req,res)=>{
    const {username,title,description,Status,deadline}=req.body
    TaskSchema.findOne({ title:title,user:username })
    .then(task => {
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      // Update the task
      task.title = title;
      task.description = description;
      task.Status = Status;
      task.deadline = deadline;

      // Save the updated task
      task
        .save()
        .then(updatedTask => {
          res.json({ updatedTask });
        })
        .catch(error => {
          res.status(500).json({ error: "Error updating task" });
        });
    })
    .catch(error => {
      res.status(500).json({ error: "Error finding task" });
    });
});

router.post("/read",(req,res)=>{
    const {username}=req.body
    TaskSchema.find({user:username }).
    then((result)=>{
        res.status(200).json({
            tasks:result
        })
    })
    .catch((error) => {
      res.status(500).json({ error: "Error finding task" });
    });
});

router.post("/dlt",(req,res)=>{
    const {title,username}=req.body
    TaskSchema.deleteOne({ title, user: username }) // Find and delete the matching document
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({
          error: "Task not found"
        });
      }
      res.status(200).json({
        message: "Task deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: "Error deleting the task" + err
      });
    });
})

module.exports=router