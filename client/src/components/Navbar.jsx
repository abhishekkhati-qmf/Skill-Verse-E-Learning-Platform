import React, { useEffect } from "react";
import { Menu, School } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "Logout successful");
      navigate("/login");
    }
  }, [isSuccess]);
  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className=" max-w-7xl mx-auto hidden md:flex justify-between items-center h-full gap-10 ">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <Link to="/">
            <h1 className="hidden md:block font-extrabold text-2xl">
              Skill Verse
            </h1>
          </Link>
        </div>
        <div>
          {/* user icon and dark mode icon */}
          <div className="flex items-center gap-8">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage
                      src={user?.photoUrl || "https://github.com/shadcn.png"}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link to="my-learning">My Learning </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {" "}
                      <Link to="profile">Edit Profile</Link>{" "}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logoutHandler}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  {user?.role === "instructor" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="/admin/dashboard">Dashboard</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button onClick={() => navigate("/login")}>Signup</Button>
              </div>
            )}
            <DarkMode />
          </div>
        </div>
      </div>
      {/* Mobile device */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <Link to="/">
          {" "}
          <h1 className="font-extrabold text-2xl">Skill Verse</h1>
        </Link>
        <MobileNavbar user={user} />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({ user }) => {
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
  try {
    await logoutUser().unwrap();
  } catch (error) {
    console.error("Logout failed", error);
  }
};

  useEffect(() => {
  if (isSuccess) {
    navigate("/login"); 
  }
}, [isSuccess, navigate]);

  return (
    <div>
      {user ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="rounded-full hover:bg-gray-200"
              variant="outline"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader className="flex flex-row items-center justify-between mt-2">
              <SheetTitle>
                {" "}
                <Link to="/">Skill Verse</Link>
              </SheetTitle>
              <DarkMode />
            </SheetHeader>
            <Separator className="mr-2" />
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/my-learning">My Learning</Link>
              <Link to="/profile">Edit Profile</Link>
              <button
                onClick={logoutHandler}
                className="text-left focus:outline-none"
              >
                Log Out
              </button>

              {user?.role === "instructor" && (
                <SheetFooter>
                  <SheetClose asChild>
                    <Button
                      className="w-full"
                      type="submit"
                      onClick={() => navigate("/admin/dashboard")}
                    >
                      Dashboard
                    </Button>
                  </SheetClose>
                </SheetFooter>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <Sheet>
          <SheetTrigger asChild>
          <SheetHeader className="flex flex-row items-center justify-between mt-2">
            <Button onClick={() => navigate("/login")}>
              Login / Signup
            </Button>
            <DarkMode />
            </SheetHeader>
          </SheetTrigger>
        </Sheet>
      )}
    </div>
  );
};
