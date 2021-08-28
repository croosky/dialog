import React from "react";
import "./index.css";

function Dialog(props) {
    return (
        <div className="dialog">{props.children}</div>
    );
}

//please don't change the code below

function ConfirmDialog() {
    return (
        <Dialog>
            <div>Are you sure?</div>
            <button className="okButton">OK</button>
            <button className="cancelButton">Cancel</button>
        </Dialog>
    );
}

function WelcomeDialog() {
    return (
        <Dialog>
            <h1>Welcome!</h1>
            <button>OK</button>
        </Dialog>
    );
}

function App() {
    return (
        <div className="App">
            <WelcomeDialog />
            <ConfirmDialog />
        </div>
    );
}

export default App;
