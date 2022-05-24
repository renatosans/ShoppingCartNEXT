
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


export default function InfoModal(modalContent = '') {
    const [show, setShow] = useState(true);
    const toggle = () => setShow(!show);

    return  <>
            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Informação</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalContent}</Modal.Body>
                <br/><br/>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggle}>Close</Button>
                </Modal.Footer>
                <div class="d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-primary" onClick={toggle}>Close</button>
                </div>
            </Modal>
		</>;
}
