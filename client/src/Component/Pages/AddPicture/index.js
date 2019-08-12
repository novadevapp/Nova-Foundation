import React from "react";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
import Input from "../../CommonComponent/Input";

import "./style.css";

export default function(props) {
  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState("");
  const [error, SetError] = React.useState(false);
  const [typeError, SetTypeError] = React.useState(false);
  const [fetchError, SetfetchError] = React.useState(false);

  const acceptedTypes = ["jpeg", "jpg", "gif", "png"];
  let type = file.split(".")[1];

  const message = {
    default: "Please add a title and upload a file",
    tyrebased: "Unfortunately we do not support file type: ",
    fetch: "Sorry something went wrong, Please try again"
  };

  const handleSubmit = e => {
    const Button = document.querySelector(".large-save__button");
    e.preventDefault();
    if ((title === "") | (file === "")) {
      SetError(true);
    } else if (acceptedTypes.indexOf(type) === -1) {
      SetTypeError(true);
    } else {
      SetError(false);
      SetTypeError(false);

      Button.textContent = "Loading...";

      fetch("/api/v1/send-pic", {
        method: "post",
        body: JSON.stringify({
          title: `${title}`,
          file: `${file}`
        })
      })
        .then(response => response.json())
        .then(({ error, data }) => {
          if (error) {
            {
              Button.textContent = "Save";
            }
            SetfetchError(true);
          } else {
            this.props.history.push("/pictures");
          }
        })
        .catch(() => {
          {
            Button.textContent = "Save";
          }
          SetfetchError(true);
        });
    }
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
              action={e => {
                setTitle(e.target.value);
              }}
            />
            <Input
              id="new-pic__file"
              label="Upload a file"
              type="file"
              action={e => setFile(e.target.value)}
            />
            {error && <p className="add-pic__error">{message.default}</p>}
            {typeError && (
              <p className="add-pic__error">
                {message.tyrebased}
                {type}
              </p>
            )}

            {fetchError && <p className="add-pic__error">{message.fetch}</p>}
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
