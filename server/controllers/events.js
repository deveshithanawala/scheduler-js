const Event = require('../models/events');

const getAllEvents = async(req,res)=>{
    try{
        const getAllEvents = await Event.find({});
        res.status(200).json(getAllEvents);

    }catch(error){
        res.status(500).json({msg:error})
    }
}
const createNewEvent = async(req,res)=>{
    try{
        const createNewEvent = await Event.create({})
        res.status(200).json(createNewEvent)

    }catch(error){
        res.status(500).json({msg:error});
    }
}

const getEventById = async(req,res)=>{
    try{
        const{id:eventId} = req.params;
        const getEventById = await Event.findOne({_id: eventId});
        if(!getEventById){
            return res.status(404).json({msg:`This id ${eventId} does not exist`})
        }
        res.status(200).json(getEventById);
    }catch(error){
        res.status(500).json({msg:error});
    }
}

const updateEventById = async(req,res)=>{
    try{
        const{id:eventId} = req.params;
        const updateEventById = await Event.findOneAndUpdate({_id:eventId},req.body,{
            new:true,
            runValidators: true
        })
        if(!updateEventById){
            return res.status(404).json({msg:`This id ${eventId} does not exist`})
        }
        res.status(200).json(updateEventById);

    }catch(error){
        res.status(500).json({msg:error});
    }
}

const deleteEventById = async(req,res)=>{
    try{
        const{id:eventId} = req.params;
        const deleteEventById = await Event.findOneAndDelete({_id:eventId})
        if(!deleteEventById){
            return res.status(404).json({msg:`This id ${eventId} does not exist`});
        }
        res.status(200).json(deleteEventById);

    }
    catch(error){
        res.status(500).json({msg:error});
    }
}

module.exports = {
    getAllEvents,
    createNewEvent,
    getEventById,
    updateEventById,
    deleteEventById
};