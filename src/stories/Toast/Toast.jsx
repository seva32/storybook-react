/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import "./toast.css";

const positionMap = {
  tl: "top-left",
  tr: "top-right",
  bl: "bottom-left",
  br: "bottom-right",
};

export function ToastNotification({ notif = null, position }) {
  const [toastsArray, setToastsArray] = useState([]);
  const [toastTimeout, setToastTimeout] = useState([]);
  const [isShowingUp, setIsShowingUp] = useState(false);

  useEffect(() => {
    const currentToasts = toastsArray.map((t) => t.index);
    if (!notif) return;
    if (!currentToasts.includes(notif.index)) {
      setIsShowingUp(true);
      setToastsArray((prev) => [...prev, notif]);
      setToastTimeout((prev) => [
        ...prev,
        {
          timeout: notif.timeout || 3000,
          index: notif.index || toastsArray.length,
        },
      ]);
    }
  }, [notif]);

  useEffect(() => {
    if (toastTimeout.length) {
      toastTimeout.forEach((t) => {
        setTimeout(() => {
          removeToast(t.index);
        }, t.timeout);
      });
      setToastTimeout([]);
    }
  }, [toastTimeout.length]);

  function removeToast(index) {
    setToastsArray((prev) => {
      const current = toastsArray.filter((t) => t.index === index)[0];
      if (!current) return [...prev];
      current.isDeleted = true;
      setTimeout(() => {
        setIsShowingUp(false);
      }, 1000);
      return [...prev.filter((t) => t.index !== index), current];
    });
  }

  //   function clearAllToast() {
  //     setToastsArray([]);
  //     setToastTimeout([]);
  //   }

  const setPosition = positionMap[position] || "top-right";
  return (
    <div
      style={{ height: `${isShowingUp ? "auto" : "0px"}` }}
      data-id={notif?.index}
      className={"toast-notification-panel " + setPosition}
    >
      {toastsArray?.map((toast, index) => {
        return (
          <ToastWrapper
            index={index}
            key={index}
            icon={toast.icon}
            title={toast.title}
            message={toast.message}
            isDeleted={toast.isDeleted}
            onClickToast={removeToast}
            type={toast.type}
            position={setPosition}
          />
        );
      })}
    </div>
  );
}

function ToastWrapper({
  index,
  icon,
  title,
  message,
  isDeleted,
  onClickToast,
  type,
  position,
}) {
  return (
    <div
      className={
        "toast-wrapper " + icon + " " + (isDeleted && "toast-out") + " " + type
      }
      onClick={() => onClickToast && onClickToast(index || 0)}
    >
      <div className="toast">
        <div className="toast-header">{title}</div>
        <div className="toast-text">{message}</div>
      </div>
    </div>
  );
}

// type Props = {
//   notif: ToastObj | null;
//   position: "tl" | "tr" | "bl" | "br";
// };

// type ToastObj = {
//   index?: number;
//   icon?: any;
//   title?: string;
//   message: string;
//   isDeleted?: boolean;
//   onClickToast?: (value: number) => void;
//   timeout?: number;
//   type: string;
//   position: string;
// };

// type Timeout = { timeout: number; index: number };

// const positionMap: Record<string, string> = {
//   tl: "top-left",
//   tr: "top-right",
//   bl: "bottom-left",
//   br: "bottom-right",
// };
