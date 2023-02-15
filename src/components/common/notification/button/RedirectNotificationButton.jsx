import {Button, Space} from "antd";
import React from "react";
const RedirectNotificationButton = ({api, nKey, href, setIsOpen}) => {
    const confirmButtonHandler = async () => {
        api.destroy(nKey)
        setIsOpen(false)
    }
    return (
        <Space>
            <Button type="link" size="small" onClick={() => api.destroy()}>
                취소
            </Button>
            <Button type="primary" size="small" onClick={() => confirmButtonHandler().then(() => window.location.href = href)}>
                이동
            </Button>
        </Space>
    )
}
export default RedirectNotificationButton