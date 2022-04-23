import AppLayout from "../components/app-layout";
import Button from "../components/button";
import Content from "../components/content";
import SpaceBetween from "../components/space-between";

export default function Error() {
  const content = "The page you have requested for does not exist.";

  return (
    <AppLayout
      webTitle="tareq alyousef - 404"
      title="error - 404"
      slim
      >
        <SpaceBetween size="medium">
          <Content content={content} />
          <Button text="home" href="/" />
        </SpaceBetween>
    </AppLayout>
  );
}

