import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getSidebarItems } from "@/utils/getSidebarItems"
import { TRole } from "@/types";
import { NavLink } from "react-router";
import { useGetUserQuery } from "@/redux/features/auth/authApi";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useGetUserQuery(undefined);
  const data = {
    navMain: getSidebarItems(userData?.role as TRole)
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-secondary">
        <NavLink to={'/'} className="text-card">Logo</NavLink>
        <div className="bg-card py-2 text-center">
          <h2 className="text-primary text-xl font-yantramanav"><span className="bg-primary px-2 text-card">{userData?.role}</span> Dashboard</h2>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-secondary">
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title} className="text-card">
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className="rounded-none">{item.title}</NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
