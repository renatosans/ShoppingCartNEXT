import { useState } from 'react';
import { Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


type props = {
    title: string;
}

export default function InfoModal({title, children}: React.PropsWithChildren<props>) {
    const [show, setShow] = useState(true);
    const toggle = () => setShow(!show);

    return  <>
            <Dialog open={show} onClose={toggle}>
                <DialogTitle>Informação{title}</DialogTitle>
                <DialogContent>
                    <span>{children}</span>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={toggle}>Close</Button>
                </DialogActions>
            </Dialog>
		</>;
}
