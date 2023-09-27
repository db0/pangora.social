import IconProps from "@/types/IconProps";

export default function PolandIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-pl"
      viewBox="0 0 512 512"
      width={width}
    >
      <g fillRule="evenodd">
        <path fill="#fff" d="M512 512H0V0h512z" />
        <path fill="#dc143c" d="M512 512H0V256h512z" />
      </g>
    </svg>
  );
}
