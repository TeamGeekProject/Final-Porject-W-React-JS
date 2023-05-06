import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { faXmark } from "@fortawesome/react-fontawesome";
import "../../styles/todo.css";
// import { faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Card } from "../component/card";
import Alert from 'react-bootstrap/Alert';

export const Collection = () => {
  const { store, actions } = useContext(Context);
  const [lgShow, setLgShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [show, setShow] = useState(false);


  return (
    <div>
      <h1 className="mb-3">
        St
        <i className="fa fa-star text-danger" />
        rs Free Music
      </h1>
      <h6>Get unlimited access to our music videos & more</h6>
      <div>
      <p className="subscription border rounded text-danger" role="button" onClick={() => setLgShow(true)} style={{color:"black"}}>Subscribe</p>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="Title2">
            Subscribe to our Latest Hits <i className="fa fa-music text-danger" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
      <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
        <Alert show={show} variant="success">
        <Alert.Heading>Thanks for Subscribing </Alert.Heading>
        <p>
          You have successfully subscribed to your monthly news on our latest hits! 
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Re-submit
          </Button>
        </div>
      </Alert>

      {!show && <Button variant="outline-danger" onClick={() => setShow(true)}>Submit</Button>}
        </Modal.Body>
      </Modal>
      </div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {store.collection.map((item, index) => {
              return (
                <Card key={index} index={index} item={item} actions={actions} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
    
  );
};
