import AppLayout from "../components/app-layout";
import Button from "../components/button";
import Content from "../components/content";
import SpaceBetween from "../components/space-between";

export default function Error() {
  const content = "A server-side error has occurred.";

  return (
    <AppLayout
      webTitle="tareq alyousef - 500"
      title="error - 500"
      slim
      >
        <SpaceBetween size="medium">
          <Content content={content} />
          <Button text="home" href="/" />
        </SpaceBetween>
    </AppLayout>
  );
}