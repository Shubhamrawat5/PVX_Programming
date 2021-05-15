import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import Loader from '../../components/Loader';

function Cards() {
  // TODO - Add loading state for languages.
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO - User axios and react query if possible.
    fetch('http://localhost:3001/api/v1/languages')
      .then((res) => res.json())
      .then((res) => {
        setLanguages(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex flex-row justify-center items-center h-full w-full">
          <Loader />
        </div>
      ): ( 
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
          {languages && languages.map((data) => {
            return (
              <Card key={data.id} data={data} />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Cards;
