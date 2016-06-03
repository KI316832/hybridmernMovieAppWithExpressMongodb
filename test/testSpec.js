var should = require("chai").should(),
expect = require("chai").expect,
assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
url.get("/")
          .expect('Content-Type', /html/)
          .expect(200)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});

describe("Testing the getjson route", function(err){
  it("should handle the request", function(done){
url.get("/services/getjson")
          .expect('Content-Type', /json/)//application/json; charset=utf-8
          .expect(200)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});

describe("Testing the add movie route", function(err){
  it("should handle the request", function(done){
      url.post("/add_details")
          .type('form')
          .send({title: "K for Kishore"})
          .expect(302)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});

describe("Testing the update movie route", function(err){
  it("should handle the request", function(done){
      url.post("/update_details")
          .type('form')
          .send({title: "K for Kishore"})
          .send({actors: "Kishore, Samantha"})
          .expect(302)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});

describe("Testing the delete route", function(err){
  it("should handle the request", function(done){
      url.post("/deleteMovie")
          .type('form')
          .send({title: "K for Kishore"})
          .expect(302)
          .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
  });
});
