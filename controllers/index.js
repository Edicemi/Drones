const Drone = require('../models/drones');
const Error = require('../lib/customError');
const { validationResult, body } = require("express-validator");

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
                    ` Weight is higher than maximum limit` 400,
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
            throw Error('Invalid parameters provided', 'MISSING ARGUMENTS', 419)
        }
    } catch (error) {
        next(error);
    }
}

const adminLogin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            const doMatch = await passwordCompare(password, user.password);
            console.log(user)
            if (doMatch) {
                let payload = {
                    user_id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    role: user.role,
                };
                const token = jwtSign(payload);
                return res.status(200).json({
                    message: 'User logged in successfully',
                    data: payload,
                    token,
                });
            } else {
                throw Error('Invalid email or password',
                    410);
            }
        } else {
            throw Error('Invalid email or password', 410);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { Register, Login }