import IconProps from "@/types/IconProps";

export default function GamepadIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -4 24 24"
      width={width}
      fill="currentColor"
    >
      <path d="M7 5h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0V7H4a1 1 0 1 1 0-2h1V4a1 1 0 1 1 2 0v1zm2.318-4h5.364A6 6 0 0 1 24 6c0 3.314-2.686 10-6 10-1.976 0-3.729-2.378-4.822-5h-2.356C9.73 13.622 7.976 16 6 16 2.686 16 0 9.314 0 6a6 6 0 0 1 9.318-5zm5.968 2H8.714l-.504-.335A4 4 0 0 0 2 6c0 3.117 2.542 8 4 8 .722 0 2.004-1.438 2.976-3.77L9.49 9h5.022l.513 1.23C15.996 12.562 17.278 14 18 14c1.458 0 4-4.883 4-8a4 4 0 0 0-6.21-3.335L15.286 3zM18 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-2 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-2 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
    </svg>
  );
}
