import ProductsForm from "@/components/Products/ProductForm";
import Modal from "@/components/base/Modal";

type IProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};
export default function ProductsCreate({ isOpen, setIsOpen }: IProps) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ProductsForm />
    </Modal>
  );
}
