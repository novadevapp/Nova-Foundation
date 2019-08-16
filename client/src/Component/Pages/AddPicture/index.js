import React from "react";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Input from "../../CommonComponent/Input";

import "./style.css";

export default function(props) {
  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState({ name: "." });
  const [error, SetError] = React.useState(false);
  const [typeError, SetTypeError] = React.useState(false);
  const [fetchError, SetfetchError] = React.useState(false);
  const [buttonContent, setbuttonContent] = React.useState("Save");
  const acceptedTypes = ["jpeg", "jpg", "gif", "png"];

  const message = {
    default: "Please add a title and upload a file",
    tyrebased:
      "Please upload a different file, we do not support that file type ",
    fetch: "Sorry something went wrong, Please try again"
  };

  let type = file.name.split(".")[file.name.split(".").length - 1];

  const handleSubmit = e => {
    e.preventDefault();

    if ((title === "") | (file.name == ".")) {
      SetError(true);
    } else if (acceptedTypes.indexOf(type) === -1) {
      SetTypeError(true);
    } else {
      SetError(false);
      SetTypeError(false);

      setbuttonContent("Loading...");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);

      fetch("/api/v1/add-picture", {
        method: "post",
        body: formData
      })
        .then(response => response.json())
        .then(({ error, data }) => {
          if (error) {
            setbuttonContent("Save");
            SetfetchError(true);
          } else {
            props.history.push("/pictures");
          }
        })
        .catch(err => {
          setbuttonContent("Save");
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
            <label htmlFor="new-pic__file"> Upload a file </label>
            <input
              id="new-pic__file"
              type="file"
              onChange={e => setFile(e.target.files[0])}
            />
            {error && <p className="add-pic__error">{message.default}</p>}
            {typeError && <p className="add-pic__error">{message.tyrebased}</p>}

            {fetchError && <p className="add-pic__error">{message.fetch}</p>}
            <div className="add-pic-page__form_buttons">
              <a href="/pictures" className="large-skip__button">
                Back
              </a>
              <button className="large-save__button" type="submit">
                {buttonContent}
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
