import {useQuery} from "react-query";
import {weatherServiceAPI} from "./api/api";
import dayjs from "dayjs";

const DataChart = () => {
    const config = {
        params: {
            serviceKey: "avP3IfTpxDK50GQaRfRJf5iZHTFbFLkQHRkYCmphmqGAMs/ToAKLbEdkn97qZzX4nd/2V5Tv/OwL+FVvR9Qw9g==",
            pageNo: "1",
            numOfRows: "1000",
            dataType: "JSON",
            base_date: dayjs().format("YYYYMMDD"),
            base_time: dayjs().clone().subtract(1,"hours").format("HH").concat("00"),
            nx: "60",
            ny: "127",
        },
    }
    const {isLoading} = useQuery("weather", () => weatherServiceAPI(config), {
        retry: false,
        onSuccess: (data) => {
            const {response} = data.data
            // const {header} = response
            // const {resultCode, resultMsg} = header
            console.table(response.body.items)
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