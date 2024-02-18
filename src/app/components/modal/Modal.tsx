"use client";
import React from "react";
import Button from "../button/Button";

interface ModalProps {
  onCancel?: () => void;
  onConfirm: () => void;
  confirmButtonLabel?: string;
  confirmButtonVariant?: "danger" | "primary";
  cancelButtonLabel?: string;
  cancelButtonVariant?: "danger" | "primary";
  title: string;
  body: string;
}

const Modal: React.FC<ModalProps> = ({
  onCancel,
  onConfirm,
  title,
  body,
  cancelButtonLabel,
  confirmButtonLabel = "primary",
  confirmButtonVariant,
  cancelButtonVariant = "danger",
}) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className=" dark:bg-slate-800 bg-white  rounded-lg p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
          <p className="mb-4">{body}</p>
          <div className="flex justify-center">
            {onCancel && (
              <Button
                onClick={onCancel}
                label={cancelButtonLabel ?? "Cancel"}
                className="px-4 py-2 mr-4"
                variant={cancelButtonVariant}
              />
            )}
            <Button
              onClick={onConfirm}
              label={confirmButtonLabel ?? "Confirm"}
              className="px-4 py-2"
              variant={confirmButtonVariant}
            />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-slate-200 opacity-70"></div>
    </>
  );
};

export default Modal;
