import React, { useEffect, useState } from "react";

import Card from "./Card";

function Cards() {
  // TODO - Add loading state for languages.
  const [languages, setLanguages] = useState();

  useEffect(() => {
    // TODO - User axios and react query if possible.
    fetch('http://localhost:3001/api/v1/languages')
      .then((res) => res.json())
      .then((res) => {
        setLanguages(res.data);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      {languages && languages.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </>
  );
}

export default Cards;
