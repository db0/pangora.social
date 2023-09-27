import IconProps from "@/types/IconProps";

export default function ComputerIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -4 24 24"
      width={width}
      fill="currentColor"
    >
      <path d="M2 13v1h3V2H2v9h1v2H2zM1 0h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm9 3h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v6h8V5h-8zm2 9h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"></path>
    </svg>
  );
}
