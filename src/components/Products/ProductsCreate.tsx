import ProductCreationForm from "@/components/Products/ProductCreationForm";
import Modal from "@/components/base/Modal";

type IProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};
export default function ProductsCreate({ isOpen, setIsOpen }: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ProductCreationForm />
    </Modal>
  );
}
