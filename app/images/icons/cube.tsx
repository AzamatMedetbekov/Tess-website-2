import { ISVGIcon } from "@/app/components/Icon";

function Cube(props: ISVGIcon) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g strokeWidth={1} fillRule="evenodd">
        <path
          d="M14.1937473,3.53928415 L8,7.41037618 L1.80625275,3.53928415 L7.50386106,0.283507965 C7.81129373,0.107832154 8.18870627,0.107832154 8.49613894,0.283507965 L14.1937473,3.53928415 Z M14.943798,4.24975008 C14.9804789,4.35443515 15,4.46598225 15,4.58032254 L15,11.4196775 C15,11.7785343 14.8077139,12.1098778 14.4961389,12.2879206 L8.5,15.7142857 L8.5,8.27712382 L14.943798,4.24975008 Z M1.05620201,4.24975008 L7.5,8.27712382 L7.5,15.7142857 L1.50386106,12.2879206 C1.19228606,12.1098778 1,11.7785343 1,11.4196775 L1,4.58032254 C1,4.46598225 1.01952108,4.35443515 1.05620201,4.24975008 Z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export { Cube };
