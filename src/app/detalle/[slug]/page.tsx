import ProductDetail from "@/components/Products/ProductDetail";
import GridPrincipal from "@/components/base/GridPrincipal";

export default function Detail({ params }: { params: { slug: string } }) {
  return (
    <GridPrincipal>
      <ProductDetail slug={params.slug} />
    </GridPrincipal>
  );
}
