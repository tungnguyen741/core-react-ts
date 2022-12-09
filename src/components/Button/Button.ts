import styles from "./Button.module.scss";

// interface IButton {}

export const Button = ({ children = null, ...props }) => {
  return `<div class=${styles.ButtonClassName}>
      ${children}
    </div>`;
};
