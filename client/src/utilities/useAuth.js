import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "../redux/authSlice";

const useAuth = () => {
    const dispatch = useDispatch();
    const { accessToken } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!accessToken) {
            dispatch(refreshToken());
        }
    }, [accessToken, dispatch]);

    return accessToken;
};

export default useAuth;
