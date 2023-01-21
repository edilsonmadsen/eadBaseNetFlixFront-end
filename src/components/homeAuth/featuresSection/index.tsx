import styles from "./styles.module.scss";
import useSWR from "swr";
import courseService, { CourseType } from "../../../services/courseService";
import HeaderAuth from "./../../common/headerAuth/index";
import { Container, Button } from "reactstrap";
import Link from "next/link";

const FeaturedSection = function () {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      {
        data.data?.map((course: CourseType) => (
          <div key={course.id}>
            <HeaderAuth />
            <Container>
              <p className={styles.title}>{course.name}</p>
              <p className={styles.description}>{course.synopsis}</p>
              <Link href={`/courses/${course.id}`}></Link>
              <Button outline color="light" className={styles.button}>
                ACESSE AGORA!
                <img
                  src="/buttonPlay.svg"
                  alt="buttonImg"
                  className={styles.buttonImg}
                />
              </Button>
            </Container>
          </div>
        ))[0]
      }
    </>
  );
};

export default FeaturedSection;