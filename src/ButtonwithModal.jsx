
import Modal from "./modal";
import useModalDialog from "./Hooks/useModalDialog";
export default function ButtonwithModal() {
    const {isOpen, open, close} = useModalDialog();
    return (
        <>
            <button onClick={open}>Open Modal</button>

            <div>
                {/* isOpen true h to modal render krdo */}
                {isOpen && <Modal close = {close}/>}
            </div>
        </>
    );
}