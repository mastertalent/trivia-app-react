import Error from "../features/error";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  errorComponent: JSX.Element;
  outlet: JSX.Element;
};

export const ProtectedRoute = ({
  isAuthenticated,
  errorComponent,
  outlet,
}: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return outlet;
  } else {
    return errorComponent;
  }
};

export const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
  isAuthenticated: false,
  errorComponent: <Error />,
};
