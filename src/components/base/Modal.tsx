import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import closeIcon from "../../../public/close.svg";

type IProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: JSX.Element;
};
export default function Modal({ children, isOpen, setIsOpen }: IProps) {
  return (
    <Transition
      show={isOpen}
      enter="duration-300 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0">
      <Dialog
        open={isOpen}
        static
        onClose={() => null}
        className="relative z-50 ">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-7xl max-h-full overflow-x-auto space-y-4 border bg-white px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12 pt-12 pb-8 rounded-3xl">
            <img
              className="float-right w-8 h-8 -mt-8 -mr-1 sm:-mr-2 md:-mr-4 lg:-mr-5 xl:-mr-6     cursor-pointer "
              onClick={() => setIsOpen(false)}
              src={closeIcon.src}
            />

            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}
