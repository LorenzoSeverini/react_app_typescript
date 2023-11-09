import { ReactNode } from "react";

// Alert component
interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose } : Props) => {
  return (
    <div className="alert alert-primary alert-dismissible text-center">{children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert