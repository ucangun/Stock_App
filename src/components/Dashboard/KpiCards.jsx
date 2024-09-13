// 'use client';

import { Card } from "@tremor/react";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function KpiCards() {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales.reduce((acc, sale) => acc + sale.amount, 0);

  const totalPurchases = purchases.reduce(
    (acc, purchase) => acc + purchase.amount,
    0
  );

  const totalCash = totalSales - totalPurchases;

  const data = [
    {
      name: "Sales",
      value: `€ ${totalSales}`,
      color: "emerald",
    },
    {
      name: "Cash",
      value: `€ ${totalCash}`,
      color: "indigo",
    },
    {
      name: "Purchases",
      value: `€ ${totalPurchases}`,
      color: "rose",
    },
  ];

  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} decoration="top" decorationColor={item.color}>
            <dd className="flex items-start justify-between">
              <span className="font-semibold text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.value}
              </span>
            </dd>
            <dt className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </dt>
          </Card>
        ))}
      </dl>
    </>
  );
}
