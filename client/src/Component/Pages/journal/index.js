import React from "react";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
import Loading from "../../CommonComponent/Loading";
import Thoughts from "./thoughts";
import AddIcon from "../../CommonComponent/AddIcon";
import IconM from "../Stories/icon-m";
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
            await props.setIsLogged({ auth: false, username: "" });
            props.history.push("/login");
            resolve();
          });
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
        <div className='journal__header'>
          <h1 className='journal__title'> Journal</h1>
          <AddIcon onClick={handleClick} />
        </div>
        <p className='journal-content'>
          We encourage you to journal. It is a healthy way to heal as it gets
          your emotions on the inside out onto paper or screen. Some experiences
          are too painful for words, and drawing in a journal can be just as
          cathartic. Studies have shown that journaling can improve sleep, and
          reduce anxiety and stress. Journaling does not have to take long and
          can take as little as 5 minutes a few times a week, giving you space
          to connect with how you are feeling, and also connect with your baby.
        </p>
        <p className='journal-content'>
          If you are not sure where to start you could write about why you chose
          your baby's name, whether they have any symbols or animals, lessons or
          knowledge your baby has taught you, how you are feeling or anything
          else that is part of you or your baby's story. There is no right or
          wrong with journaling, it is a space for you and only you to get your
          inner thoughts out and connect with how you feel.
        </p>
        <IconM />
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
