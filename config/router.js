var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
   router.route('/students')
      .get(student.find);
   router.route('/students/:id')
      .get(student.findme)
      .post(student.insert)
      .put(student.update)
      .delete(student.delete);
   router.route('/teachers')
      .get(teacher.find)
      .post(teacher.create)
      .put(teacher.update)
      .delete(teacher.delete);
        
   return router;
   };
//.gitignore   
//git config --global user.name
//git config --global user.email
// git init
//git commit -m "makabuluhang message"
//git remote add origin https://github.com/asvibar/cmsc100week2.git
//git push -u origin master