import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const ArticleForm = ({
  article,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  debugger;
  return (
    <form className="Form-center" onSubmit={onSave}>
      <h2>{article.id ? "Edit" : "Add"} article</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={article.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="subTitle"
        label="Subtitle"
        value={article.shortArticle.subTitle}
        onChange={onChange}
        error={errors.subTitile}
      />

      <TextInput
        name="resume"
        label="Resume"
        value={article.shortArticle.resume}
        onChange={onChange}
        error={errors.resume}
      />

      <TextInput
        name="text"
        label="Text"
        value={article.text}
        onChange={onChange}
        error={errors.text}
      />

      <TextInput
        name="photoMain"
        label="Main photo"
        value={article.photoMain}
        onChange={onChange}
        error={errors.photoMain}
      />

      <TextInput
        name="video"
        label="Video"
        value={article.video}
        onChange={onChange}
        error={errors.video}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

ArticleForm.propTypes = {
  article: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default ArticleForm;
