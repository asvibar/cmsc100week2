var request = require('supertest');
   should = require('should-http');
   
   describe('student',function(){ // collection of all test cases in student module
      var url = 'localhost:5000';
      
      describe('find',function(){//describe for fin function
         it('Should retrieve all student records',function(done){
            request(url)
            .get('/students')
            .end(function(err,res){
               if(err) throw err;
               res.should.have.status(200); //test for response
               res.body.should.instanceof(Array); //test body of response
               done();
            });//error handling and test
         });
      });
      
      describe('find1',function(){//describe for fin function
         it('Should retrieve a student record',function(done){
            request(url)
            .get('/students/' + '2013-03369')
            .end(function(err,res){
               if(err) throw err;
               res.should.have.status(200); //test for response
               res.body.should.instanceof(Object); //test body of response
               done();
            });//error handling and test
         });
      });
      
      describe('insrt',function(){//describe for fin function
         it('Should return a newly created student record',function(done){
            request(url)
            .post('/students')
            .send({'studNo':'2069-67899','name':'Kek Master','bdate':'2000-12-12'})
            .end(function(err,res){
               if(err) throw err;
               res.should.have.status(200); //test for response
               res.body.should.instanceof(Object); //test body of response
               res.should.have.property('studNo','name','bdate');
               res.studNo.should.match(/^\d{4}-\d{5}$/);
          //     res.bdate.should.match(/^\d{4}-(01|02|03|04|05|06|07|08|09|10|11|12)-(01|02|03|04|05|06|07|08|09|10|11|2|13|14|15|16|17|19|20|21|22|23|24|25|26|27|28|29|30|31)$/);
               
               done();
            });//error handling and test
         });
      });  
      

   });
   
    //npm instal --save supertest
   //npm install --save should-http
   //http://unitjs.com/guide/should-js.html -check mah stuff