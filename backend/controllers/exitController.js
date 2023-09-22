const ExitPoint = require('../models/exitModel');
const mongoose = require('mongoose');

const getAllExits = async (req,res) => {
    const exits = await ExitPoint.find({}).sort({name: 1});

    res.status(200).json(exits);
};

const getSingleExit = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'Not a valid ID'});
    }

    const exit = await ExitPoint.findById(id);

    if (!exit) {
        return res.status(404).json({message: 'Exit not found'});
    }

    res.status(200).json(exit);
};

const createExitPoint = async (req,res) => {
    console.log("createExitPoint");
    console.log(req.body);
    let {
        name, 
        location,
        altitude,
        description,
        coordinates,
        jumps,
        type,
        parking,
        landing,
        sliderConfiguration,
        suitRequired
    } = req.body;

    // let altitudeInt = parseInt(altitude);
    // let jumpsInt = parseInt(jumps);
    // let landingAltitudeInt = parseInt(landing.altitude);
    altitude = parseInt(altitude);
    jumps = parseInt(jumps);
    landing.altitude = parseInt(landing.altitude);
    console.log(altitude);
    console.log(jumps);
    console.log(landing.altitude);
    
    try {
        const exit = await ExitPoint.create({
            name, 
            location,
            altitude,
            description,
            coordinates,
            type,
            parking,
            landing,
            sliderConfiguration,
            suitRequired
        })
        res.status(200).json(exit)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteSingleExit = async (req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'Not a valid ID'});
    }

    const exit = await ExitPoint.findByIdAndDelete({_id: id});

    if (!exit) {
        return res.status(400).json({message: 'Exit not found'});
    }

    res.status(200).json({message: 'Exit deleted'});
};

const updateSingleExit = async (req,res) => {
    const { id } = req.params;
    const {
        name, 
        location,
        altitude,
        description,
        coordinates,
        type,
        parking,
        landing,
        sliderConfiguration,
        suitRequired
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: 'Not a valid ID'});
    }

    const exit = await ExitPoint.findOneAndUpdate({_id: id}, {...req.body});

    if (!exit) {
        return res.status(400).json({message: 'Exit not found'});
    }

    res.status(200).json(exit);
};

module.exports = {
    createExitPoint,
    getAllExits,
    getSingleExit,
    deleteSingleExit,
    updateSingleExit
}
