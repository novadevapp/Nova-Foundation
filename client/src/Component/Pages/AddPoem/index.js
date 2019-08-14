import React from "react";

export default (AddPoem = props => {
  const [title, setTitle] = React.useState("");
  const [poem, setPoem] = React.useState("");
  const [error, setError] = React.useState(false);
  const [typeError, setTypeError] = React.useState(false);
  const [fetchError, setFetchError] = React.useState(false);
  const [buttonContent, setButtonContent] = React.useState("Save");
  const acceptedTypes = "";
});

const message = {
  default: "Please add a title and add a poem",
  tyrebased: "Please upload a different poem, we do not support that poem type",
  fetch: "Sorry something went wrong, Please try again"
};

let type = poem.name.split("")[poem.name.split("").length - 1];

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
      });
  }
};
