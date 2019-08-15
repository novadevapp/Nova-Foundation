import React from "react";
import Header from "../../CommonComponent/Header";
import Input from "../../CommonComponent/Input";
import Footer from "../../CommonComponent/Footer";

const AddPoem = props => {
  const [title, setTitle] = React.useState("");
  const [poem, setPoem] = React.useState("");
  const [error, setError] = React.useState(false);
  const [typeError, setTypeError] = React.useState(false);
  const [fetchError, setFetchError] = React.useState(false);
  const [buttonContent, setButtonContent] = React.useState("Save");
  const acceptedTypes = "";

  const message = {
    default: "Please add a title and add a poem",
    tyrebased:
      "Please upload a different poem, we do not support that poem type",
    fetch: "Sorry something went wrong, Please try again"
  };

  let type = poem.name.split(".")[poem.name.split(".").length - 1];

  const handleSubmit = e => {
    e.preventDefault();

    if ((title === "") | (poem.name === "")) {
      setError(true);
    } else if (acceptedTypes.indexOf(type) === -1) {
      setTypeError(true);
    } else {
      setError(false);
      setTypeError(false);

      setButtonContent("Loading...");

      const poemData = new poemData();
      poemData.append("title", title);
      poemData.append("poem", poem);

      fetch("/api/v1/send-poem", {
        method: "post",
        body: poemData
      })
        .then(response => response.json())
        .then(({ error, data }) => {
          if (error) {
            setButtonContent("Save");
            setFetchError(true);
          } else {
            this.props.history.push("/poems");
          }
        })
        .catch(() => {
          setButtonContent("Save");
          setFetchError(true);
        });
    }
  };

  return (
    <div>
      <Header isLogged="true" />
      <main className="add-poem-page">
        <section className="add-poem__section">
          <h2 className="add-poem__title">Add a Poem</h2>
          <form className="add-poem__form" onSubmit={handleSubmit}>
            <Input
              id="new-poem__title"
              placeholder="Add a title"
              label="Title"
              type="text"
              action={e => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="new-poem__text">Add a poem</label>
            <input
              id="mew-poem__text"
              type="text"
              onChange={e => setPoem(e.target.poems[0])}
            />
            {error && <p className="add-poem__error">{message.default}</p>}
            {typeError && (
              <p className="add-poem__error">{message.tyrebased}</p>
            )}
            {fetchError && <p className="add-poem__error">{message.fetch}</p>}
            <div className="add-poem__form__button">
              <a href="/poems" className="large-skip__button">
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
    </div>
  );
};

export default AddPoem;
