export interface IconButtonProps {
  /**
   * Icon type displayed on the left side of component
   */
  icon: string;
  /**
   * Triggers a desired action when component tapped
   */
  onTap?: () => {};
  /**
   * Determines color of button
   */
  color?: string;
}
