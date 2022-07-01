
import { useState } from 'react';
import { Button, Modal } from '@mui/material';


export default function InfoModal(props) {
    const [show, setShow] = useState(true);
    const toggle = () => setShow(!show);

    return  <>
            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Informação</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children}</Modal.Body>
                <br/><br/>
                <Modal.Footer>
                    <Button variant="primary" onClick={toggle}>Close</Button>
                </Modal.Footer>
            </Modal>
		</>;
}
