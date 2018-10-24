var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    //console.log("ID not valid");
    return res.status(400).send();
  } else {
    Todo.findById(id)
      .then(todo => {
        if (!Todo) {
          return res.status(400).send();
        } else {
          res.send({ todo });
        }
      })
      .catch(e => {
        res.status(400).send(e);
      });
  }
});


app.delete("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    //console.log("ID not valid");
    return res.status(400).send();
  } else {
    Todo.findByIdAndRemove(id)
      .then(todo => {
        if (!Todo) {
          return res.status(400).send();
        } else {
          res.send({ todo });
        }
      })
      .catch(e => {
        res.status(400).send(e);
      });
  }
});







app.get("/users", (req, res) => {
  User.find().then(
    users => {
      res.send({ users });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.post("/users", (req, res) => {
  var user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  user.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};