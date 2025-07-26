import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";

const Courses = () => {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError) return <h1 className="text-center text-red-500 mt-10">Some error occurred while fetching courses.</h1>;

  return (
    <div className="bg-gray-50 dark:bg-[#141414] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="font-bold text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
          Our Courses
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))
            : data?.courses?.length > 0
              ? data.courses.map((course, index) => (
                  <Course key={index} course={course} />
                ))
              : <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                  No courses available.
                </p>}
        </div>
      </div>
    </div>
  );
};

export default Courses;

// Skeleton Component
const CourseSkeleton = () => {
  return (
    <div className="bg-white dark:bg-[#1e1e1e] shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36 sm:h-40 md:h-44" />
      <div className="px-4 py-3 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};


// import { Skeleton } from "@/components/ui/skeleton";
// import React from "react";
// import Course from "./Course";
// import { useGetPublishedCourseQuery } from "@/features/api/courseApi";

// const Courses = () => {
//   const { data, isLoading, isError } = useGetPublishedCourseQuery();
//   if (isError) return <h1>Some error occured while fetching courses.</h1>;

//   return (
//     <div className="bg-gray-50 dark:bg-[#141414]">
//       <div className="max-w-7xl mx-auto p-6">
//         <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {isLoading
//             ? Array.from({ length: 8 }).map((_, index) => (
//                 <CourseSkeleton key={index} />
//               ))
//             : data?.courses &&
//               data.courses.map((course, index) => (
//                 <Course key={index} course={course} />
//               ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;

// const CourseSkeleton = () => {
//   return (
//     <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
//       <Skeleton className="w-full h-36" />
//       <div className="px-5 py-4 space-y-3">
//         <Skeleton className="h-6 w-3/4" />
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <Skeleton className="h-6 w-6 rounded-full" />
//             <Skeleton className="h-4 w-20" />
//           </div>
//           <Skeleton className="h-4 w-16" />
//         </div>
//         <Skeleton className="h-4 w-1/4" />
//       </div>
//     </div>
//   );
// };
