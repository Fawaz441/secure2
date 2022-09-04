import Image from "next/image";
import closeIcon from "../../assets/svgs/close.svg";

const Modal = ({ close, children }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header className="modal-header">
          <div onClick={close}>
            <Image className="btn-close" src={closeIcon} alt="Close" />
          </div>
        </header>
        <section className="modal-body">{children}</section>
      </div>
    </div>
  );
};

export default Modal;
