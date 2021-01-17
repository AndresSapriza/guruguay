import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ArticleForm from "./ArticleForm";
import * as articleActions from "../../redux/actions/actionArticle";
import { newArticle } from "../../../tools/mockData";
import { useHistory } from "react-router-dom";

const AddArticle = ({ saveArticle, ...props }) => {
  const [article, setArticle] = useState({ ...props.article });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  let history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "subTitle" || name === "resume") {
      setArticle((prevArticle) => ({
        ...prevArticle,
        shortArticle: {
          ...prevArticle.shortArticle,
          [name]: value,
        },
      }));
    } else {
      setArticle((prevArticle) => ({
        ...prevArticle,
        [name]: value,
      }));
    }
  }

  function formIsValid() {
    const { title, photoMain, text } = article;
    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!photoMain) errors.photoMain = "Main photo is required";
    if (!text) errors.text = "Text is required";
    // if (!shortArticle.resume) errors.resume = "Resume is required";
    // if (!shortArticle.subTitle) errors.subTitle = "Subtitle is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveArticle(article)
      .then(() => {
        // toast.success("Course saved.");
        history.push("/");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return (
    <>
      <ArticleForm
        article={article}
        errors={errors}
        onSave={handleSave}
        onChange={handleChange}
        saving={saving}
      />
    </>
  );
};

AddArticle.propTypes = {
  article: PropTypes.object.isRequired,
  saveArticle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    article: newArticle,
    articles: state.articles,
  };
}

const mapDispatchToProps = {
  saveArticle: articleActions.saveArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);
