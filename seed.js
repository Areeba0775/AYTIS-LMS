import 'dotenv/config';
import {connectDB} from './config/db.js';
import {Student,Teacher,Class} from './models/index.js';
await connectDB();
if(await Class.countDocuments()===0) await Class.insertMany(['KG','Class 1','Class 2','Class 3','Class 4','Class 5','Class 6','Class 7','Class 8','Class 9','Class 10'].map(name=>({name,capacity:30})));
if(await Teacher.countDocuments()===0) await Teacher.create({teacherId:'T-001',fullName:'Sample Teacher',subject:'Mathematics',phone:'03001234567'});
if(await Student.countDocuments()===0){const c=await Class.findOne({name:'Class 9'});await Student.create({studentId:'AY-001',fullName:'Sample Student',guardianName:'Parent Name',phone:'03001234567',classId:c?._id,monthlyFee:3500,status:'Active'});}
console.log('Sample data ready');process.exit(0);
