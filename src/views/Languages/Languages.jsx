import React from "react";
import { useTransition, animated } from "react-spring";

import Card from "../../components/Card";
import Loader from '../../components/Loader';
import useLanguages from "../../hooks/useLanguages";

function Languages() {
  const { data: languages, status, error } = useLanguages();
  
  const transitions = useTransition(languages && languages.data, {
    from : { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 1, scale: 0 },
    config: { duration: 500 },
  });

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
      {
        transitions((style, item) => {
          return (
            item ? (
              <animated.div
                style={style}
              >
                <Card data={item} />
              </animated.div>) 
            : null
          );
        })
      }
    </div>
  );
}

export default Languages;
