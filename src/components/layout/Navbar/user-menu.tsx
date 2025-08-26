import {
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authApi, useLogOutUserMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Link } from "react-router";

export default function UserMenu({ user }: { user: IUser }) {
  const { name, email, role } = user || {}

  const [logOutUser] = useLogOutUserMutation(undefined);
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    try {
      await logOutUser(undefined);
      dispatch(authApi.util.resetApiState())
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="ghost" className="h-auto  p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback className="bg-card text-primary text-base">{ name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 rounded-none" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-secondary truncate text-sm font-medium capitalize">
            {name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {email}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>

          <DropdownMenuItem>
            <Link to={role.toLowerCase()}>Dashboard</Link>
          </DropdownMenuItem>

        </DropdownMenuGroup>

        <DropdownMenuSeparator/>

        <DropdownMenuItem>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />

          <button onClick={handleLogOut} className="cursor-pointer">Logout</button>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
