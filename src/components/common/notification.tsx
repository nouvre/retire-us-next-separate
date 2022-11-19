import { Store, NOTIFICATION_TYPE } from "react-notifications-component";

export const Toast = (title: string, message: string, type: NOTIFICATION_TYPE): void => {
    Store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-center",
        dismiss: {
            duration: 4000,
        },
    });
};
