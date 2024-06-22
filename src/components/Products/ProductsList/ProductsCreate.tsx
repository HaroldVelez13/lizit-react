import ProductCreationForm from "@/components/Products/ProductsList/ProductCreationForm";
import Modal from "@/components/base/Modal";

type IProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleCreate: () => void;
};
export default function ProductsCreate({
  isOpen,
  setIsOpen,
  handleCreate,
}: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ProductCreationForm handleCreate={handleCreate} />
    </Modal>
  );
}
