import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  
  Button,
  Container,
} from "reactstrap";
import { toast } from "react-toastify";

function Course({course}) {

    const start = () => {
        toast.success('Started', {
          position: "top-center"
        });
    }

    const end = () => {
        toast.error('Deleted', {
          position: "top-center",
          theme : "light"
        });
    }

  return (
    <Card
      style={{
        width: "18rem",
        padding: 20,
        margin: 50
      }}
    >
      <img alt="Sample" src={course.src} />
      <CardBody>
        <CardTitle  tag="h5">{course.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {course.title}
        </CardSubtitle>
        <CardText>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components. It is maintained by Meta
          and a community of individual developers and companies. React can be
          used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js
        </CardText>
        <Container className="text-center">
          <Button color="success" onClick={start}>Start Course</Button>
          <Button color="danger" onClick={end} style={{marginLeft: 5}}> Delete </Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
