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
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetch("/api/v1/thoughts")
      .then(res => res.json())
      .then(result => {
        if (result.auth === false) {
          return new Promise(async (resolve, reject) => {
            await props.setIsLogged({ auth: false, username: '' });
            props.history.push('/login');
            resolve();
          })
        }
        setThoughts(result.data);
        setLoading(false);
      })
      .catch(err => setError("Something went wrong"));
  }, [props]);
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
        {error && <p className='error'>{error}</p>}
        {thoughts.length ? (
          <Thoughts thoughts={thoughts} />
        ) : (
            <p>You don't have any thing saved</p>
          )}

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
