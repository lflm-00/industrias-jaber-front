export const ModalCloseButton = ({ onClose }) => (
  <button
    onClick={onClose}
    className="absolute top-4 right-4 z-50 size-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-all backdrop-blur-md"
  >
    <span className="material-symbols-outlined">close</span>
  </button>
);