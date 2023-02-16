import {notification} from 'antd';
import React from 'react';
import RedirectNotificationButton from "./button/RedirectNotificationButton";
import dayjs from "dayjs";
import {NotificationPlacement} from "./constant";


const Notification = ({
                          isOpen,
                          setIsOpen,
                          type,
                          message,
                          description,
                          href,
                          placement = NotificationPlacement.BOTTOM_RIGHT,
                          duration = 7,
                          // callback,
                      }) => {
    const [api, contextHolder] = notification.useNotification();
    React.useEffect(() => {
        if (isOpen) {
            const key = dayjs().unix();
            api.open({
                message: message,
                description: description || `${duration}초 뒤 닫힙니다!`,
                btn: <RedirectNotificationButton api={api} nKey={key} setIsOpen={setIsOpen} href={href}/>,
                key: key,
                placement: placement,
                duration: duration,
                type: type,
                onClose: () => {
                    setIsOpen(false)
                }
            });
        }
    }, [api, description, duration, href, isOpen, message, placement, setIsOpen, type])

    return (
        <React.Fragment>
            {contextHolder}
        </React.Fragment>
    );
};
export default Notification;