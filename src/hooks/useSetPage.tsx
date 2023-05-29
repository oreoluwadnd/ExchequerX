import { useAppDispatch, RootState } from "../features/store";
import { setPage } from "../features/auth/authSlice";

export const pageChange = () => {
  const dispatch = useAppDispatch();
  dispatch(setPage());
};
