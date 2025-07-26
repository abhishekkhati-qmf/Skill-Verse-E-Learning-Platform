import { Button } from "@/components/ui/button";
import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex">
        <div className="hidden lg:block w-[250px] sm:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 p-5 sticky top-0 h-screen">
          <div className="space-y-4">
            <Link to="dashboard" className="flex items-center gap-2">
              <ChartNoAxesColumn size={22} />
              <h1>Dashboard</h1>
            </Link>
            <Link to="course" className="flex items-center gap-2">
              <SquareLibrary size={22} />
              <h1>Courses</h1>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden gap-2 mt-4 mb-4 ">
          <div className="absolute top-18 bottom-10 left-4 right-4 flex gap-2 md:hidden z-9">
            <Button
              variant="outline"
              className="border-black"
              onClick={() => navigate("dashboard")}
            >
              Dashboard
            </Button>
            <Button
              variant="outline"
              className="border-black"
              onClick={() => navigate("course")}
            >
              Courses
            </Button>
          </div>
        </div>
        <div className="flex-1 pt-20 md:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
