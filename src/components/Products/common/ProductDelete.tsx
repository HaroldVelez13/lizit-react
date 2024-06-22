import Modal from "@/components/base/Modal";

type IProps = {
  isOpen: boolean;
  title: string;
  setIsOpen: (open: boolean) => void;
  confirm: () => void;
};
export default function ProductDelete({
  isOpen,
  setIsOpen,
  title,
  confirm,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <section className="text-center">
        <h3 className="font-bold text-xl">
          ¿Está seguro que desea eliminar el producto
        </h3>
        <p className="font-bold text-xl">{title}?</p>
        <div className="grid grid-cols-2 mt-10">
          <button
            onClick={() => setIsOpen(false)}
            className="w-5/6 mx-auto  text-blue-50 bg-white border-2 border-blue-50 font-semibold    rounded-full   py-2.5   mb-2 shadow-sm  ">
            Cancelar
          </button>

          <button
            onClick={confirm}
            className="w-5/6 mx-auto  text-white bg-red-500 hover:bg-red-400 focus:ring-4  font-semibold   rounded-full   py-2.5  mb-2 shadow-sm  ">
            Confirmar
          </button>
        </div>
      </section>
    </Modal>
  );
}
