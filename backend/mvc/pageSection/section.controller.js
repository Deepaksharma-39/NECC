const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const eventService = require("./section.service");

// routes
router.get("/", getAllEvents);
router.get("/page/:categoryID", getEventByCategory);
router.get("/:id", authorize(), getEventById);
router.post("/", authorize(), createEventSchema, createEvent);
router.put("/:id", authorize(), updateEventSchema, updateEvent);
router.delete("/:id", authorize(), deleteEvent);

module.exports = router;

function getAllEvents(req, res, next) {
  eventService
    .getAllEvents()
    .then((events) => res.json(events))
    .catch(next);
}

function getEventById(req, res, next) {
  eventService
    .getEventById(req.params.id)
    .then((event) => res.json(event))
    .catch(next);
}

function createEventSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    pagesID: Joi.number().required(),
    // Add more validation for other attributes if needed
  });
  validateRequest(req, next, schema);
}

async function createEvent(req, res, next) {
  try {
    // Extract categoryId from request body or any other source

    // Create the event with the associated categoryId
    await eventService.createEvent({
      name: req.body.name, 
      pagesID: req.body.pagesID, // Associate the event with the specified category
    });

    res.json({ message: "Section created successfully" });
  } catch (error) {
    next(error);
  }
}

function updateEventSchema(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().empty(""),
    // Add more validation for other attributes if needed
  });
  validateRequest(req, next, schema);
}

function updateEvent(req, res, next) {
  eventService
    .updateEvent(req.params.id, req.body)
    .then((event) => res.json(event))
    .catch(next);
}

function deleteEvent(req, res, next) {
  eventService
    .deleteEvent(req.params.id)
    .then(() => res.json({ message: "Event deleted successfully" }))
    .catch(next);
}
async function getEventByCategory(req, res, next) {
  try {
   
      const categoryID = req.params.categoryID;
      const events = await eventService.getEventByCategory(categoryID);
      res.json(events);
  } catch (error) {
      next(error);
  }
}


