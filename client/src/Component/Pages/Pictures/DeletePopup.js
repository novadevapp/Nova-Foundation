import React from "react";
import Button from "../../CommonComponent/Button";

export default ({ referance, visiabilty, submit }) => {
  return (
    <div id="myModal" className="modal" ref={referance}>
      <div className="modal-content">
        <span className="close" onClick={visiabilty}>
          &times;
        </span>
        <p> Are You Sure To Delete Your Picture?</p>
        <div className="modal__btn">
          <Button
            name="Delete"
            className="small-save__button"
            onClick={submit}
          />
          <Button
            name="Cancel"
            className="small-cancel__button"
            onClick={visiabilty}
          />
        </div>
      </div>
    </div>
  );
};
