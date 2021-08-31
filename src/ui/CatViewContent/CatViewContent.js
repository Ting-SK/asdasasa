import React from "react";

export const CatViewContent = ({ loading, error, data }) => {
  if (error) {
    return <h3>{error}</h3>;
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (data) {
    return <img src={data} alt="cat" width="640px" height="424px" />;
  }
  return <div>Cat View is empty</div>;
};