import React from "react";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
import Input from "../../CommonComponent/Input";

import "./style.css";

export default function(props) {
  function handleRedirection(path) {
    props.history.push(path);
  }

  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState("");

  const handleSubmit = e => {
    const Button = document.querySelector(".large-save__button");
    Button.textContent = "Loading...";
    e.preventDefault();
    fetch("/send-pic", {
      method: "post",
      body: JSON.stringify({
        title: `${title}`,
        file: `${file}`
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.status !== 200) {
          console.log(res);
        }
        handleRedirection("/pictures");
      });
  };

  return (
    <>
      <Header isLogged="true" />
      <main className="add-pic-page">
        <section className="add-pic-page__section">
          <h2 className="add-pic-page__title">Add a Picture</h2>
          <form className="add-pic-page__form" onSubmit={handleSubmit}>
            <Input
              id="new-pic__title"
              placeholder="Add a title"
              label="Title"
              type="text"
              action={e => setTitle(e.target.value)}
            />
            <Input
              id="new-pic__file"
              label="Upload a file"
              type="file"
              action={e => setFile(e.target.value)}
            />
            <div className="add-pic-page__form_buttons">
              <a href="/pictures" className="large-skip__button">
                Back
              </a>
              <Button
                className="large-save__button"
                name="Save"
                type="submit"
                action={handleSubmit}
              />
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
