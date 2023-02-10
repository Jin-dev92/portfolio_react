import {useQuery} from "react-query";
import {weatherServiceAPI} from "./api/api";

const DataChart = () => {
    const config = {
        params: {
            serviceKey: "avP3IfTpxDK50GQaRfRJf5iZHTFbFLkQHRkYCmphmqGAMs%2FToAKLbEdkn97qZzX4nd%2F2V5Tv%2FOwL%2BFVvR9Qw9g%3D%3D",
            pageNo: "1",
            numOfRows: "1000",
            // dataType: "JSON",
            base_date: "20210628",
            base_time: "0500",
            nx: "55",
            ny: "127",
        },
        headers: {
            withCredentials: true,
            'Content-Type': 'application/json',
        }
    }

    const {data, error, isLoading} = useQuery("weather", () => weatherServiceAPI(config), {
        retry: false,
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {

        }

    })
    return (
        <div>
        </div>
    )
}

export default DataChart