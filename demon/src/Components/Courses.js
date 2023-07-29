import Course from "./Course";

function courses() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Course
        course={{
          name: "Java",
          title: "Course",
          src: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
        }}
      />
      <Course
        course={{
          name: "Spring Boot",
          title: "Course",
          src: "https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png",
        }}
      />
      <Course
        course={{
          name: "AWS",
          title: "Course",
          src: "https://yt3.googleusercontent.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s900-c-k-c0x00ffffff-no-rj",
        }}
      />
      <Course
        course={{
          name: "MongoDB",
          title: "Course",
          src: "https://www.nurulfikri.com/wp-content/uploads/2020/02/MongoDB-mdb.png",
        }}
      />
    </div>
  );
}

export default courses;
