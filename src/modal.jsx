
export default function Modal({ close }) {
    return (
        <div className="modal">
            <h2>Modal</h2>
            <button onClick={close}>Close</button>
        </div>
    );
}