import {Card} from "antd";

export const MovieCard = ({data}) => {
    return (
        <Card>
            {JSON.stringify(data)}
        </Card>
    )
}