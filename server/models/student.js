import mongoose from "mongoose";

//create an instant for mongoose schema
const studentSchema = mongoose.Schema({
  //define schema ie hoe student doc looks like

  registrationNumber: Number,
  name: String,
  grade: String,
  section: {
    type: String,
    //set default value
    default: "A",
  },
// array model
  subjects: [String],
});

//create student model in mongoose db
const student = mongoose.model("student", studentSchema);
//export models
export default student;
