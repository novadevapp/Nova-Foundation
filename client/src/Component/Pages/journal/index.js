import React from "react";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
import Loading from "../../CommonComponent/Loading";
import Thoughts from "./thoughts";
import AddIcon from "./AddIcon";
import "./style.css";

export default props => {
  //
  const handleClick = () => {
    props.history.push("/status");
  };
  const [thoughts, setThoughts] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/v1/thoughts")
      .then(res => res.json())
      .then(data => {
        setThoughts(data.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <Header {...props} />
      <main className='journal'>
        <h1 className='journal__title'> Journal</h1>
        <AddIcon onClick={handleClick} />
        {loading && (
          <div className='journal__loading'>
            <Loading />
          </div>
        )}
        {thoughts !== "" ? <Thoughts thoughts={thoughts} /> : null}
        <Button
          name='Back'
          className='large-skip__button'
          onClick={() => props.history.goBack()}
        />
      </main>
      <Footer />
    </>
  );
};
