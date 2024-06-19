import GridPrincipal from "@/components/base/GridPrincipal";
import ProducstSearchs from "@/components/Products/ProducstSearchs";
import ProductsHeader from "@/components/Products/ProductsHeader";
import ProductsTable from "@/components/Products/ProductsTable";

export default function Home() {
  return (
    <GridPrincipal>
      <div>
        <ProductsHeader />
        <ProducstSearchs />
        <ProductsTable />
      </div>
    </GridPrincipal>
  );
}
