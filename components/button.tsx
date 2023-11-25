import React from 'react';
interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  side?: 'left' | 'right';
  link?: string;
  label?: string;
}

const Button: React.FC = ({ side = 'left', children, icon, link }: Props) => {
  return (
    <div className="h-fit w-fit">
      <a href={link}>
        <div className="flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2">
          {children}
        </div>
      </a>
    </div>
  );
};

export default Button;

export function GhButton(props: Props) {
  return (
    <Button side={props.side} link={props.link}>
      {props.label || "Github"}
    </Button>
  );
}

export function DocButton(props: Props) {
  return (
    <Button  side={props.side} link={props.link}>
      {props.label || "Documentation"}
    </Button>
  );
}

export function DownloadButton(props: Props) {
  return (
    <Button  side={props.side} link={props.link}>
      {props.label || "Download"}
    </Button>
  );
}

export function ReleaseButton(props: Props) {
  return (
    <Button  side={props.side} link={props.link}>
      {props.label || "Releases"}
    </Button>
  );
}

export function NpmButton(props: Props) {
  return (
    <Button  side={props.side} link={props.link}>
      {props.label || "Package"}
    </Button>
  );
}