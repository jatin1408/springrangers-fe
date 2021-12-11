export declare type props = {
  onClick?: (event: any) => void;
  variant: 'primary' | 'secondary' | 'tertiary' | 'gradient_primary' | 'gradient_secondary';
  label?: string | React.ReactNode;
  iconPath?: string;
  color?: 'white' | 'pink' | 'black';
  fullWidth?: boolean;
  className?: string; // To provide extra css
  container_className?: string; // To provide extra css for container
  invert?: boolean; // Toggle the icon
  children?: React.ReactNode;
  unbold?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  id?: any;
  showInline?: boolean;
  type?: 'button' | 'submit' | 'reset';
  inProgress?: boolean;
};
