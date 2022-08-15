const Room = require('../models/Room');
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync');
const User =require('../models/User');
const Message = require('../models/Message');



exports.fetchRoom = catchAsync(async (req, res, next) => {
    let {user1,user2} = req.body;
    if (!user1 || !user2) return next(new AppError("Please give two valid users", 400));
    const isUsers = await User.find({_id : {"$in" : [user1,user2]}});
    if (isUsers.length<2) return next(new AppError("Users were not found!", 404))
    const isRoom = await Room.findOne({users : {"$in" : [user1,user2]}});
    if (isRoom) return res.json({
        status : true,
        isNew : false,
        room : isRoom,
    });
    const newRoom = new Room({
        users : [user1,user2]
    });

    const savedNewRoom = await newRoom.save();
    let roomPopulated = await Room.findById(savedNewRoom.id).populate('users').populate('lastMessage');
    res.json({
        status : true,
        isNew : false,
        room : roomPopulated
    });
});


exports.fetchRooms = catchAsync(async(req,res,next)=>{
    const allRooms = await Room.find({users : {"$in" : [req.user.id]}}).populate('users').populate('lastMessage');
    res.json({
        status : true,
        rooms : allRooms
    })
});


exports.fetchMessagesByRoom = catchAsync(async (req, res, next) => {
    const {id} = req.params;
    const messages = Message.find({room : id}).sort("-createdAt");
    res.json({
        status : true,
        room : id,
        messages : messages
    });
})