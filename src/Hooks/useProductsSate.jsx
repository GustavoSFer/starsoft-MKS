import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BaseUrl } from '../Util'

const fetchData = async() => {
    const response = await axios.get(BaseUrl);
    return response.data;
}

export function useProductsData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["products-data"]
    });

    return query;
}