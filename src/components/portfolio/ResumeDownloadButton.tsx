import { Button } from "@/src/components/ui/Button";

export function ResumeDownloadButton({
  className,
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Button
      className={className}
      download="Prathamesh_Kunjeer_Resume.pdf"
      href="/resume.pdf"
      variant={variant}
    >
      Download Resume
    </Button>
  );
}
