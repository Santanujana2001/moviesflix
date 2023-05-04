import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Model(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Record, setRecord] = useState({ name: "", email: ""});
  const handlechange = (event) => {
    setRecord({ ...Record, [event.target.name]: event.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(Record);
    window.localStorage.setItem(`${Record.name}`, JSON.stringify(Record));
    document.getElementById("dataform").reset();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        book a ticket
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking for {props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><form onSubmit={handlesubmit} id="dataform">
            <div className="form-group my-2">
              <label htmlFor="exampleInputEmail1">
                <b>Your name</b>
              </label>
              <input className="form-control my-2" type="text" name="name" placeholder="Name" onChange={handlechange} required/>
            </div>
            <div className="form-group my-2">
              <label htmlFor="exampleInputEmail1">
                <b>Email address</b>
              </label>
              <input type="email" name="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handlechange} required/>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <button type="submit" className="btn btn-primary my-2">
              Book now
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;
