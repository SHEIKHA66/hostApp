import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNotes } from "../Features/NoteSlice";
import { Table } from "reactstrap";
import moment from "moment";

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const email = useSelector((state) => state.admins.admin.email); //  const email = useSelector((state) => state.studs.stud.email);
  const adminId = useSelector((state) => state.admins.admin._id);
  // const userId = useSelector((state) => state.studs.stud._id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <div className="postsContainer">
      <h1>Important Note</h1>
      <Table className="table table-striped">
        <thead></thead>

        <tbody>
          {notes.map((note) => (
            <tr key={note._id}>
              {/* Ensure to add a unique key for each row */}
              <td>{note.email}</td>
              <td>
                {/* <p>{note.createdAt}</p> */}
                <p>{moment(note.createdAt).fromNow()}</p>
                {note.noteMsg}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div> /* End of note */
  );
};
export default Notes;

/*

<div>
        <Link to={`/studpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>

*/
