var db = require('./../lib/mysql');

exports.find = function(req,res,next){
   //res.send('Hello World!');
   console.log('find()' + req.ip);
   db.query('SELECT * FROM student',
      function(err,rows){
         if(err) return next(err); 
         res.send(rows);//send rows ->result of mysql 
      });
};

exports.findme = function(req,res,next){
   //res.send('Hello World!');
   console.log('findme()' + req.ip);
   db.query('SELECT * FROM student WHERE studNo=?',[req.params.id],
      function(err,rows){
         if(err) return next(err);
         if(rows.length==0) res.status(404).send("Student not found")
         else res.send(rows[0]);//send rows ->result of mysql 
      });
};


exports.insert = function(req,res,next){
   //res.send('Hello World!');
   db.query('INSERT INTO student VALUES (?,?,?)',[req.body.studNo,req.body.name,req.body.bdate],
      function(err,rows){
         if(err) return next(err);
         else res.send(rows);//send rows ->result of mysql 
      });
};

exports.update = function(req,res,next){
   //res.send('Hello World!');
   db.query('UPDATE student SET ? WHERE studNo=?',[req.params.id],
      function(err,rows){
         if(err) return next(err);
         else res.send(rows[0]);//send rows ->result of mysql 
      });
};

exports.delete = function(req,res,next){
   //res.send('Hello World!');
   db.query('DELETE FROM student WHERE studNo=?',[req.params.id],
      function(err,rows){
         if(err) return next(err);
         else res.send(rows[0]);//send rows ->result of mysql 
      });
};


//get retrieve select * from
//post create  insert
//put update  update where eg update/students/_
//delete delete delete where $_
//get select * from where $_