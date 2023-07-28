import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import { toast } from "react-toastify";

function Course() {

    const start = () => {
        toast.success('Started');
    }

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src="https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b" />
      <CardBody>
        <CardTitle  tag="h5">React JS</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Course
        </CardSubtitle>
        <CardText>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components. It is maintained by Meta
          and a community of individual developers and companies. React can be
          used to develop single-page, mobile, or server-rendered applications
          with frameworks like Next.js
        </CardText>
        <Button onClick={start}>Start Course</Button>
        <Button style={{marginLeft: 5}}> Delete </Button>
      </CardBody>
    </Card>
  );
}

export default Course;
