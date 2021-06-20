import React from "react";

import Card from "../../components/Card";
import Loader from '../../components/Loader';
import useLanguages from "../../hooks/useLanguages";

function Cards() {

  const { data: languages, status, error } = useLanguages();

  if (status === 'loading') {
    return (
      <div className="flex flex-row justify-center items-center h-full w-full">
        <Loader />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div>error { error.message }</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-full">
      {languages.data && languages.data.map((language) => {
        return (
          <Card key={language.id} data={language} />
        );
      })}
    </div>
  );
}

export default Cards;
