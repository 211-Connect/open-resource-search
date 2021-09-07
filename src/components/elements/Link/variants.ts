import getTextColorContrast from 'src/utils/getTextColorContrast';

export type Variant = 'normal' | 'outline' | 'button';

export function getVariant(props) {
  if (props.variant === 'button') {
    return `
      box-sizing: border-box;
      background-color: ${props.theme.pallete.primary};
      border: none;
      color: ${getTextColorContrast(props.theme.pallete.primary)};
      display: block;
      font-size: 0.9375rem;
      padding: 8px 16px;
      transition: all .3s;
      text-align: center;
      font-weight: 600;
      text-decoration: none;

      :hover {
        background-color: ${props.theme.pallete.primaryMedium};
        color: ${getTextColorContrast(props.theme.pallete.primaryMedium)};
      }
    `;
  } else if (props.variant === 'outline') {
    return `
      box-sizing: border-box;
      border: 1px solid ${props.theme.pallete.primaryLight};
      flex: 1;
      font-weight: 300;
      text-align: center;
      padding: 8px 16px;
      text-decoration: none;

      :hover {
        background-color: ${props.theme.pallete.primary};
        color: ${getTextColorContrast(props.theme.pallete.primary)};
      }
    `;
  } else {
    return `
      box-sizing: border-box;
      text-decoration: none;
      font-weight: 300;

      :hover {
        text-decoration: underline;
      }
    `;
  }
}
