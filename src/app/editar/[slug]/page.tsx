import ProductUpdate from "@/components/Products/ProductUpdate/ProductUpdate";
import GridPrincipal from "@/components/base/GridPrincipal";

export default function Detail({ params }: { params: { slug: string } }) {
  return (
    <GridPrincipal>
      <ProductUpdate slug={params.slug} />
    </GridPrincipal>
  );
}
