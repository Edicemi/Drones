const Drone = require('../models/drones');
const Medication = require('../models/medications');
const Error = require('../lib/customError');
const { validationResult, body } = require("express-validator");
const { uploadCloudinary } = require("../utils/cloudinary");
const path = require('path');
const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();

const registerDrone = async(req, res, next) => {
    const { number, model, weight, battery, state } = req.body;
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            throw new Error("Error request, check input again.", result, 401)
        }
        if (number && model && weight && battery && state) {
            let droneExist = await Drone.findOne({ number: number })
            if (droneExist) {
                throw Error(`Drone ${number} already exist, register a new one.`, 400)
            }

            if (weight > 500) {
                throw new Error(
                    ` ]Weight ${weight} is higher than maximum limit`, 400,
                );
            }

            const drone = new Drone({
                number: number,
                model: model,
                weight: weight,
                battery: battery,
                state: state,
            })
            await drone.save();

            let payload = {
                drone_id: drone._id,
                number: drone.number,
                model: drone.model,
                weight: drone.weight,
                batter: drone.batter,
                state: drone.state,
            }
            return res.status(200).json({
                message: 'Drone registered successfully',
                data: payload,
            })
        } else {
            throw new Error('Invalid parameters provided', 'MISSING ARGUMENTS', 419)
        }
    } catch (error) {
        next(error);
    }
}

const addMedication = async (req, res, next) => {
    try {
      const { name, weight, code, photo} = req.body;
      const {droneId} = req.params
      const {state} = req.body
      // console.log(req.file);
      const extName = path.extname(req.file.originalname).toString();
      const file64 = parser.format(extName, req.file.buffer);
      const result = await uploadCloudinary(file64.content);
  
      if (weight > 500) {
        throw new Error(
            ` Weight is too high for the drone`,400,
        );
    }
      const medication = new Medication({
        droneId: droneId,
        name: name,
        weight: weight,
        code: code,
        photo: result.res,
      });

      const changeState = await Drone({
        droneId: droneId,
        state
    })
    post.drones.push(changeState);
    } catch (error) {
        next(error);
    }
}

const getMedications = async (req, res, next) => {
    try {
        const {droneId} = req.params
      const check = await Medication.findById("droneId")
      return res.status(200).json({
        message: "fetched succesfully",
        check
      });
    } catch (error) {
      next(error);
    }
  };

const checkingIdleDrones = async (req, res, next) => {
    try {
        const getIdleDrone = await Drone.find().sort({
            state: 'idle'
        }).select("number model weight battery")
        return res.status(200).json({
            message: 'fetched succesfully',
            data: getIdleDrone,
        });
    } catch (error) {
        next(error);
    }
};

const checkBattery = async (req, res, next) => {
    try {
        const { droneId } = req.params;
        const drone = await Drone.findById({ droneId });
        if (drone) {
            const drones = await Account.find().select(["battery"]);
            return res.status(200).json({
                status: "success",
                message: 'Battery Info fetched succesfully',
                drones,
            });
        } else {
            throw new Error('Invalid',
                400);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { registerDrone, addMedication, getMedications, checkingIdleDrones, checkBattery }