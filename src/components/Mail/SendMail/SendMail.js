import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../../features/mailSlice";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    addDoc(collection(db, "emails"), {
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          name="to"
          {...register("to", { required: true })}
        />
        {errors.to?.type === "required" && (
          <p className="sendMail__error">To is required</p>
        )}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          {...register("subject", { required: true })}
        />
        {errors.subject?.type === "required" && (
          <p className="sendMail__error">Subject is required</p>
        )}
        <input
          type="text"
          className="sendMail__message"
          placeholder="Message..."
          name="message"
          {...register("message", { required: true })}
        />
        {errors.message?.type === "required" && (
          <p className="sendMail__error">Message is required</p>
        )}

        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail__send "
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
