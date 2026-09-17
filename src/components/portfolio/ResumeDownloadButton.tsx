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
      download="Praathamesh_Kunjjeerr_Resume.pdf"
      href="/resume.pdf"
      variant={variant}
    >
      Download Resume
    </Button>
  );
}
