import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";

export default props => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    match: { params }
  } = props;

  let id = params.id;

  const nextPoem = () => {
    id = parseInt(id) + 1;

    if (id >= poems.length) id = 0;
    props.history.push(`/poems/${id}`);
  };

  useEffect(() => {
    fetch("/api/v1/poems")
      .then(res => res.json())
      .then(result => {
        if (result.auth === false) {
          return new Promise(async (resolve, reject) => {
            await props.setIsLogged({ auth: false, username: "" });
            props.history.push("/login");
            resolve();
          });
        }
        if (result.error) throw new Error("");
        setPoems(result.data);
        setLoading(true);
      })
      .catch(() => {
        setError("Something Error Please Try Again");
        setLoading(true);
      });
    return () => undefined;
  }, [props]);

  return (
    <>
      <main className='poem-s-main'>
        <Header {...props} />
        {loading && error && <p className='error'>{error}</p>}
        {loading && (
          <>
            <div className='poem-container'>
              <h4 className='poem-s-title'>{poems[id].title}</h4>
              <p className='poem-s-body'>{poems[id].content}</p>
            </div>
            <div className='poem-buttons'>
              <Button
                className='large-back__button'
                name='Back'
                onClick={() => props.history.goBack()}
              />
              <Button
                className='register__button'
                name='More Poems'
                onClick={() => {
                  nextPoem();
                }}
              />
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};
