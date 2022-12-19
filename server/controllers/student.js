export const getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();

    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = (req, res) => {
  try {
    const student =req.body;
    const newStudent = new student()
  } catch (error) {}
};
