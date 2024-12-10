import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import BusModel from "./Models/Bus.js";
import StudModel from "./Models/StudModel.js";
import NoteModel from "./Models/Notes.js";

import bcrypt from "bcrypt";

import AdminModel from "./Models/AdminModel.js";
import ModelStudent from "./Models/Student.js";
import HostelModel from "./Models/HostelModel.js";
const app = express();

app.use(cors());
app.use(express.json());

const connectString =
  "mongodb+srv://admin:admin123456@housinginfosys.msiveop.mongodb.net/housDb?retryWrites=true&w=majority";
mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post("/registerStud", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = await bcrypt.hash(password, 10);

    const stud = new StudModel({
      name: name,
      email: email,
      password: hashedpassword,
    });

    await stud.save();
    res.send({ stud: stud, msg: "Added." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const stud = await StudModel.findOne({ email: email });

    if (!stud) {
      return res.status(500).json({ error: "User not found!" });
    }

    console.log(stud);
    const passwordMatch = await bcrypt.compare(password, stud.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    res.status(200).json({ stud, message: "Success." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/addBus", async (req, res) => {
  const busId = req.body.busId;
  const day = req.body.day;
  const busFi = req.body.busFi;
  const busS = req.body.busS;
  const busT = req.body.busT;
  const busFo = req.body.busFo;

  const bus = new BusModel({
    busId: busId,
    day: day,
    busFi: busFi,
    busS: busS,
    busT: busT,
    busFo: busFo,
  });
  await bus.save();
  res.send("Record Successfully Added!");
});

app.get("/manage", async (req, res) => {
  const buses = await BusModel.find({})
    .then(async (buses) => {
      const countBuses = await BusModel.countDocuments({});
      res.send({ buses, count: countBuses });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await BusModel.findByIdAndDelete(id).exec();
  const countBuses = await BusModel.countDocuments({});
  res.send({ msg: "Item Deleted", count: countBuses });
});

app.get("/getBus/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await BusModel.findById(id);
    const count = await BusModel.countDocuments();
    res.send({ result, count });
  } catch (err) {
    console.error(err);
    res.send({ error: "Internal Server error" });
  }
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const busId = req.body.busId;
  const day = req.body.day;
  const busFi = req.body.busFi;
  const busS = req.body.busS;
  const busT = req.body.busT;
  const busFo = req.body.busFo;

  try {
    const busToUpdate = await BusModel.findOne({ _id: id });

    busToUpdate.busId = String(busId);
    busToUpdate.day = String(day);
    busToUpdate.busFi = String(busFi);
    busToUpdate.busS = String(busS);
    busToUpdate.busT = String(busT);
    busToUpdate.busFo = String(busFo);

    await busToUpdate.save();
    res.send({ msg: "Record Updared" });
  } catch (err) {
    console.error(err);
    res.send({ error: "Failed to update Buse timing record" });
  }
});

//POST API - saveNotes
app.post("/saveNote", async (req, res) => {
  try {
    const noteMsg = req.body.noteMsg;
    const email = req.body.email;
    const note = new NoteModel({
      noteMsg: noteMsg,
      email: email,
    });
    await note.save();
    res.send({ note: note, msg: "Added." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

//GET API - getNote
app.get("/getNotes", async (req, res) => {
  try {
    // Fetch all posts from the "PostModel" collection, sorted by createdAt in descending order
    const notes = await NoteModel.find({}).sort({ createdAt: -1 });
    const countNote = await NoteModel.countDocuments({});
    res.send({ notes: notes, count: countNote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Register Admin
app.post("/registerAdmin", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new AdminModel({ name, email, password: hashedPassword });

    await admin.save();
    res.status(201).json({ admin, msg: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/loginad", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email: email });

    if (!admin) {
      return res.status(500).json({ error: "User not found!" });
    }

    console.log(admin);
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    res.status(200).json({ admin, message: "Success." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Logout
app.post("/logoutad", async (req, res) => {
  try {
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/addStudent", async (req, res) => {
  const studId = req.body.studId;
  const studName = req.body.studName;
  const email = req.body.email;
  const password = req.body.password;
  const dept = req.body.dept;

  const student = new ModelStudent({
    studId: studId,
    studName: studName,
    email: email,
    password: password,
    dept: dept,
  });
  await student.save();
  res.send("Record Successfully Added!");
});

app.get("/managestud", async (req, res) => {
  const students = await ModelStudent.find({})
    .then(async (students) => {
      const countStudents = await ModelStudent.countDocuments({});
      res.send({ students, count: countStudents });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/deletes/:id", async (req, res) => {
  const id = req.params.id;
  await ModelStudent.findByIdAndDelete(id).exec();
  const countStuds = await ModelStudent.countDocuments({});
  res.send({ msg: "Item Deleted", count: countStuds });
});

app.get("/getStudent/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ModelStudent.findById(id);
    const count = await ModelStudent.countDocuments();
    res.send({ result, count });
  } catch (err) {
    console.error(err);
    res.send({ error: "Internal Server error" });
  }
});

app.put("/updates/:id", async (req, res) => {
  const id = req.params.id;
  const studId = req.body.studId;
  const studName = req.body.studName;
  const email = req.body.email;
  const password = req.body.password;
  const dept = req.body.dept;

  try {
    const studToUpdate = await ModelStudent.findOne({ _id: id });

    studToUpdate.studId = String(studId);
    studToUpdate.studName = String(studName);
    studToUpdate.email = String(email);
    studToUpdate.password = String(password);
    studToUpdate.dept = String(dept);

    await studToUpdate.save();
    res.send({ msg: "Record Updared" });
  } catch (err) {
    console.error(err);
    res.send({ error: "Failed to update Buse timing record" });
  }
});

app.post("/addNote", async (req, res) => {
  const notenum = req.body.notenum;
  const note = req.body.note;
  const notedate = req.body.notedate;
  const notetime = req.body.notetime;

  const notee = new ModelStudent({
    notenum: notenum,
    note: note,
    notedate: notedate,
    notetime: notetime,
  });
  await notee.save();
  res.send("Record Successfully Added!");
});

// 📌 Save Hostel Data
app.post("/saveHostelData", async (req, res) => {
  try {
    const { name, email, stayedBefore, yearsStayed, rentalPrice } = req.body;

    // Calculate discount
    let discount = 0;
    if (stayedBefore) {
      if (yearsStayed === 1) discount = 0.02 * rentalPrice;
      else if (yearsStayed === 2) discount = 0.04 * rentalPrice;
      else if (yearsStayed === 3) discount = 0.05 * rentalPrice;
      else if (yearsStayed >= 4) discount = 0.1 * rentalPrice;
    }

    const hostelData = new HostelModel({
      name,
      email,
      stayedBefore,
      yearsStayed,
      rentalPrice,
      discount,
    });

    await hostelData.save();
    res.status(201).json({ msg: "Hostel data saved successfully", hostelData });
  } catch (error) {
    console.error("Error saving hostel data:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(3001, () => {
  console.log("you are connected");
});
