import React from "react";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

export const notify = (props) => {
  const { type, message, timeOut, title, callback, priority } = props;
  switch (type) {
    case "info":
      NotificationManager.info(message, title, timeOut, callback, priority);
      break;
    case "success":
      NotificationManager.success(message, title, timeOut, callback, priority);
      break;
    case "warning":
      NotificationManager.warning(message, title, timeOut, callback, priority);
      break;
    case "error":
      NotificationManager.error(message, title, timeOut, callback, priority);
      break;
    // no default
  }
};
