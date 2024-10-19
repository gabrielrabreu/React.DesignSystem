import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_private/")({
  component: () => {
    return (
      <div>
        <h2>Home</h2>
        <p>This is the page content.</p>
      </div>
    );
  },
});
