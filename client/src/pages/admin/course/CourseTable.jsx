import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetCreatorCourseQuery } from "@/features/api/courseApi";

const CourseTable = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCreatorCourseQuery();

  if (isLoading)
    return <h1 className="text-center text-lg mt-10">Loading...</h1>;

  return (
    <div className="p-4 sm:p-6 relative z-10">
      <div className="mb-4 flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Your Courses</h2>
        <Button onClick={() => navigate(`create`)}>Create New Course</Button>
      </div>

      {/* Mobile View (Cards) */}
      <div className="md:hidden space-y-4">
        {data?.courses?.length > 0 ? (
          data.courses.map((course) => (
            <div
              key={course._id}
              className="bg-white dark:bg-[#1f1f1f] rounded-md shadow p-4 space-y-2 border"
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-lg truncate max-w-[70%]">
                  {course.courseTitle}
                </h3>
                <Badge variant={course?.isPublished ? "default" : "outline"}>
                  {course?.isPublished ? "Published" : "Draft"}
                </Badge>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Price: ₹{course?.coursePrice || "N/A"}
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => navigate(`${course._id}`)}
              >
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Button>
            </div>
          ))
        ) : (
          <p className="text-center">No courses found.</p>
        )}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border rounded-md">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Price</th>
              <th className="px-4 py-2 text-left font-semibold">Status</th>
              <th className="px-4 py-2 text-left font-semibold">Title</th>
              <th className="px-4 py-2 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {data?.courses?.length > 0 ? (
              data.courses.map((course) => (
                <tr key={course._id} className="bg-white dark:bg-[#1c1c1c]">
                  <td className="px-4 py-3">₹{course.coursePrice || "N/A"}</td>
                  <td className="px-4 py-3">
                    <Badge
                      variant={course?.isPublished ? "default" : "outline"}
                    >
                      {course?.isPublished ? "Published" : "Draft"}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate">
                    {course.courseTitle}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => navigate(`${course._id}`)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                  No courses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;


// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { useGetCreatorCourseQuery } from "@/features/api/courseApi";
// import { Edit } from "lucide-react";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CourseTable = () => {
//     const navigate = useNavigate();
//     const {data,isLoading} = useGetCreatorCourseQuery();
//     if(isLoading) return <h1>Loading...</h1>
//   return (
//     <div>
//       <Button onClick={()=>navigate(`create`)}>Create a new course</Button>
//       <Table>
//       <TableCaption>A list of your recent courses.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">Price</TableHead>
//           <TableHead>Status</TableHead>
//           <TableHead>Title</TableHead>
//           <TableHead className="text-right">Action</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {data.courses.map((course) => (
//           <TableRow key={course._id}>
//             <TableCell className="font-medium">{course?.coursePrice || "N/A"}</TableCell>
//             <TableCell><Badge>{course?.isPublished ? "Published" : "Draft"}</Badge></TableCell>
//             <TableCell>{course?.courseTitle}</TableCell>
//             <TableCell className="text-right">
//                   <Button size='sm' variant="ghost" onClick={()=>navigate(`${course._id}`)}><Edit/></Button>
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//     </div>
//   );
// };

// export default CourseTable;
