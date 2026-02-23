import { ModalOverlay, ModalCloseButton } from "../Atoms";
import { ProductModalContent } from "../organisms";
import { ModalFooter } from "../molecules";

export const ProductModal = ({ isOpen, onClose, product }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
            <ModalOverlay onClose={onClose} />

            <div className="relative w-full max-w-4xl bg-[#F1F5F9] dark:bg-[#2d241b] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full animate-in fade-in zoom-in duration-300">

                <ModalCloseButton onClose={onClose} />

                <ProductModalContent product={product} />

                <ModalFooter />
            </div>
        </div>
    );
};