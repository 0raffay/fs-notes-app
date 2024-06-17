import { Button } from "@/components/ui/button";
import ROUTES from "@/routes";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      id="landing"
      className="relative min-h-screen bg-dark-400 text-white grid place-content-center"
    >
      <main>
        <h1 className="text-[24px] mb-4 text-center leading-none">
          Welcome to <strong className="font-medium">Notepad Web</strong>
        </h1>
        <Link to={ROUTES.dashboard}>
          <Button centered={true}>New Note</Button>
        </Link>
      </main>

      <footer className="absolute mx-auto left-0 right-0 bottom-8 flex flex-col gap-3">
        <p className="text-[14px] mb-4 text-center leading-none">
          Developed by{" "}
          <strong className="font-medium">Abdul Raffay Sheikh</strong>
        </p>
      </footer>
    </div>
  );
}
