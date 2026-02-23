export const ModalOverlay = ({ onClose }) => (
  <div
    className="absolute inset-0 bg-[#181411]/80 backdrop-blur-sm"
    onClick={onClose}
  />
);