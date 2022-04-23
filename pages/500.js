import Button from "../components/button";
import Content from "../components/content";
import Divider from "../components/divider";

export default function Error() {
  const content = "A server-side error has occurred.";

  return (
    <>
      <title>
        tareq alyousef - 500
      </title>
      <div id="page-container" style={{width: "550px", marginTop: "125px"}}>
        <h1 id="title">error - 500</h1>
        <Divider size="large" />
        <Content content={content} />
        <Divider size="medium" />
        <Button text="home" href="/" />
      </div>
    </>
  );
}