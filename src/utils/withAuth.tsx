import { useGetUserQuery } from "@/redux/features/auth/authApi";
import { TRole } from "@/types";
import { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, ...requiredRole: TRole[]) => {
    return function AuthWrapper() {
        const { data: user, isLoading, isSuccess } = useGetUserQuery(undefined);

        if (!isSuccess) {
            return 'Fetching...';
        }
        if (isLoading) {
            return 'Loading...';
        }

        if (!isLoading && !user?.email) {
            return <Navigate to="/login" />;
        }

        if (requiredRole && !isLoading && !requiredRole.includes(user?.role as TRole)) {
            return <Navigate to="/unauthorized" />;
        }

        return <Component />;
    };
};
