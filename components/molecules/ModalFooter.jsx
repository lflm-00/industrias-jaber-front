import { Button } from "../Atoms";

export const ModalFooter = () => (
  <div className="p-6 bg-[#f1ece4] dark:bg-[#251d15] border-t border-[#e8e4e0] dark:border-[#3a2f24] flex items-center justify-between gap-4">
    <p className="hidden md:block text-xs text-[#635548] dark:text-[#a8998a] max-w-sm italic">
      All Industrias Jaber equipment includes a 2-year warranty and global
      on-site technical support.
    </p>

    <Button variant="primary" icon="request_quote">
      Request Quote
    </Button>
  </div>
);