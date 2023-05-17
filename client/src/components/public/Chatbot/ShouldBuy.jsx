// new file called NewDoc.jsx
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../../utils/newRequest.js";
import LoadingCompoment from "../LoadingCompoment.jsx";
import ErrorCompoment from "../ErrorCompoment.jsx";
import Card from "../Card.jsx";

const ShouldBuy = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [`shouldbuy`],
    queryFn: () =>
      newRequest.get(`/document/shouldbuy`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  // console.log(data);

  return <div>{data.error ? <p>bạn không thể mua!</p> : <Card item={data} />}</div>;
};

export default ShouldBuy;
