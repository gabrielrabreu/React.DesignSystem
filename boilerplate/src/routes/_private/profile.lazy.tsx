import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_private/profile")({
  component: () => {
    return (
      <div>
        <h2>Profile</h2>
        <p>This is the page content.</p>
      </div>
    );
  },
});
