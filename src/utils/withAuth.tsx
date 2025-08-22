import { useGetUserQuery } from "@/redux/features/user/userApi";
import { TRole } from "@/types";
import { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, ...requiredRole: TRole[]) => {
    return function AuthWrapper() {
        const { data, isLoading, isSuccess } = useGetUserQuery(undefined);

        if (!isSuccess) {
            return 'Fetching...';
        }
        if (isLoading) {
            return 'Loading...';
        }

        if (!isLoading && !data?.email) {
            return <Navigate to="/login" />;
        }

        if (requiredRole && !isLoading && !requiredRole.includes(data?.role as TRole)) {
            return <Navigate to="/unauthorized" />;
        }

        return <Component />;
    };
};
