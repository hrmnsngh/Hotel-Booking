var db = require('../dbconnection').default;
var Task= {
    getAllTasks: (callback) => {
        return db.query("Select * from hotels", callback);
    },
    getTaskById: (id, callback) => {
        return  db.query("Select * from hotels where id=?",[id],callback);
    },
    addTask: (newHotel, callback) => {
        return db.query("Insert into hotels values(?,?,?)",[task],callback);
    },
    deleteTask:function(id,callback){
        return db.query("delete from hotels where Id=?",[id],callback);
       },
       updateTask:function(id,Task,callback){
        return db.query("update hotels set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
       }
}