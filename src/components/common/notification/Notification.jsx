import {notification} from 'antd';
import React from 'react';
import RedirectNotificationButton from "./button/RedirectNotificationButton";
import dayjs from "dayjs";


const Notification = ({isOpen, setIsOpen, href}) => {
    const [api, contextHolder] = notification.useNotification();
    const duration = 7
    React.useEffect(() => {
        if (isOpen) {
            const key = dayjs().unix();
            api.open({
                message: 'Notification Title',
                description: `${duration}초 뒤 닫힙니다!`,
                btn: <RedirectNotificationButton api={api} nKey={key} href={href} setIsOpen={setIsOpen}/>,
                key: key,
                placement: "bottomRight",
                duration: duration,
                type: 'info',
                onClose: () => {
                    setIsOpen(false)
                }
            });
        }
    }, [api, isOpen])

    return (
        <React.Fragment>
            {contextHolder}
        </React.Fragment>
    );
};
export default Notification;