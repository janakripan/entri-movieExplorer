import { useQuery } from "@tanstack/react-query";
import { getShows } from "./services";


export const useGetShows = () =>
    useQuery({
        queryKey:["getShows"],
        queryFn: getShows
    })