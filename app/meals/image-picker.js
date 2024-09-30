"use client";
import cssClasses from "./image-picker.module.css";
import Image from "next/image";
import { useState, useRef } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();

  function handlePickImage() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={cssClasses.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cssClasses.controls}>
        <div className={cssClasses.preview}>
          {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
          {!pickedImage && <p>No image picked yet.</p>}
        </div>
        <input
          className={cssClasses.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={cssClasses.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}
