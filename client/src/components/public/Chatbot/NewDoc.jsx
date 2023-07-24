// new file called NewDoc.jsx
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../../utils/newRequest.js";
import LoadingCompoment from "../LoadingCompoment.jsx";
import ErrorCompoment from "../ErrorCompoment.jsx";
import Card from "../Card.jsx";

const NewDoc = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [`newdoc`],
    queryFn: () =>
      newRequest.get(`/document/newdoc`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <div>
      <Card item={data} />
    </div>
  );
};

export default NewDoc;
