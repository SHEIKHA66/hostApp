import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { saveNote } from "../Features/NoteSlice";

const ShareNotes = () => {
  const [noteMsg, setnoteMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //const email = useSelector((state) => state.studs.stud.email);
  const email = useSelector((state) => state.admins.admin.email);

  const handleNote = async () => {
    // Validate that NotMsg is not empty
    if (!noteMsg.trim()) {
      alert("Note message is required."); // Display an alert or set an error state
      return; // Exit the function early if validation fails
    }
    const noteData = {
      noteMsg: noteMsg,
      email: email,
    };
    dispatch(saveNote(noteData)); // Dispatch the save Note thunk from the note Slice.
    setnoteMsg("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your Note here..."
            type="textarea"
            value={noteMsg}
            onChange={(e) => setnoteMsg(e.target.value)}
          />
          <Button onClick={() => handleNote()}>Share</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ShareNotes;
