const express = require('express');
const bodyParser = require('body-parser');
const {addEventToDb} = require('./mongodb-connect-crud/create.js');
const {getEventById, getEventByRecency} = require('./mongodb-connect-crud/read.js');
const {updateEventById} = require('./mongodb-connect-crud/update.js');
const {deleteEventFromDb} = require('./mongodb-connect-crud/delete.js');
//_________________________________________________________________________________________________________________________

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
//________________________________________________________________________________________________________________________

const getEvents = async (req,res) => {
  if(req.query.id) {
    const data = await getEventById(req.query.id);
    res.send(data);
  }
  if(req.query.type && req.query.limit && req.query.page) {
    const data = await getEventByRecency(req.query.type, req.query.limit, req.query.page);
    res.send(data);
  } 
};
//________________________________________________________________________________________________________________________

const addEvent = async (req, res) => {
  const eventId = await addEventToDb(req.body);
  if(eventId) {
    res.send({event_id : eventId})
  }
  res.send("Error saving data")
};
//________________________________________________________________________________________________________________________

const updateEvent = async (req, res) => {
  const response = await updateEventById(req.params.id, req.body)
  if(response) {
    res.send("Event update success");
  }
  res.send("Event update failed");
};
//________________________________________________________________________________________________________________________

const deleteEvent = async (req, res) => {
  const response = await deleteEventFromDb(req.params.id)
  if(response) {
    res.send("Event deleted");
  }
  res.send("Event deletion failed");  

}
//________________________________________________________________________________________________________________________

app.route('/api/v3/app/events').get(getEvents).post(addEvent);
app.route('/api/v3/app/events/:id').put(updateEvent).delete(deleteEvent);
//________________________________________________________________________________________________________________________

let port = process.env.PORT;
if(port == null || port == '') {
  port = 3000;
}

app.listen(port, function () {
  console.log(`Server has started successfully at port : ${port}`);
});