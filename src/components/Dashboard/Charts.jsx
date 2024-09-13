import { AreaChart } from "@tremor/react";
import { format } from "date-fns";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `€${Intl.NumberFormat("de").format(number).toString()}`;

export default function Charts() {
  const { sales, purchases } = useSelector((state) => state.stock);
  console.log(sales);

  const salesData = sales.map((sale) => ({
    date: format(sale.createdAt, "dd/MM/yyyy HH:mm"),
    sale: sale.amount,
  }));

  const purchasesData = purchases.map((purchase) => ({
    date: format(purchase.createdAt, "dd/MM/yyyy HH:mm"),
    purchase: purchase.amount,
  }));

  return (
    <>
      <AreaChart
        className="h-80 stroke-orange-950 "
        data={salesData}
        index="date"
        categories={["sale"]}
        colors={["emerald"]}
        valueFormatter={dataFormatter}
        yAxisWidth={65}
        onValueChange={(v) => console.log(v)}
      />
      <AreaChart
        className="h-80 "
        data={purchasesData}
        index="date"
        categories={["purchase"]}
        colors={["rose"]}
        valueFormatter={dataFormatter}
        yAxisWidth={65}
        onValueChange={(v) => console.log(v)}
      />
    </>
  );
}