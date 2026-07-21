import department from "../models/Department.js";

export const createDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    // const existingDepartment = await department.findOne({ name });
    // if (!existingDepartment) {
    //   return res.status(400).json({ message: "department already exist" });
    // }
    const newDepartment = await department.create({ name });
    if (newDepartment) {
      return res .status(201).json({ message: "department created successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getDept = async (req, res) => {
  try {
    const Department  = await department.find();
    if (!Department) {
      return res.status(400).json({ message: "no department found" });
    }
    return res.status(200).json({msg:"dept found successfully" , Department});
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const deleteDept = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDepartment = await department.findByIdAndDelete(id);
    if (!deletedDepartment) {
      return res.status(400).json({ message: "department not found" });
    }
    return res.status(200).json({ message: "department deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};