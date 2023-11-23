import { useTheme } from "../../contexts/ThemeContext";



export const addIcon = (focused:any) => {
    const color = focused ? "#E8E8E8" : "#FF6C00";
    return `<svg viewBox="0 0 25 25" fill="none">
  <circle cx="12.5" cy="12.5" r="12" fill="white" stroke="${color}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="${color}"/>
  </svg>
  `;
};
export const deleteIcon = (focused:any) => {
    const color = !focused ? "#E8E8E8" : "#FF6C00";
    return `<svg viewBox="0 0 37 37" fill="none">
  <circle cx="18.4999" cy="18.5" r="12" transform="rotate(-45 18.4999 18.5)" fill="white" stroke="${color}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z" fill="${color}"/>
  </svg>
  `;
};
export const commentIcon = (focused:any) => {
    const color = !focused ? "#E8E8E8" : "#FF6C00";
    return `<svg viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z" stroke="${color}" fill="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
};
export const arrowLeftIcon = (focused:any) => {
    const color = !focused ? "#BDBDBD" : "#FF6C00";
    return `<svg viewBox="0 0 24 24" fill="none">
  <path d="M20 12H4" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 18L4 12L10 6" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
};
export const gridIcon = (focused:any, isDark:boolean) => {
    const color = !focused ? (isDark ? "#BDBDBD" : "#212121") : "#FF6C00";
    return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
  <rect transform="translate(8 8)" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11H18V18H11V11Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 11H29V18H22V11Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 22H29V29H22V22Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22H18V29H11V22Z" stroke="${color}" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
};
export const settingsIcon = (focused:any, isDark:boolean) => {
    const { colors } = useTheme();
    const color = focused ? colors.primary : colors.icon;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${color}" class="bi bi-gear-fill" viewBox="0 0 16 16">
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
  </svg>
  `;
};
export const locationIcon = (focused:any) => {
    const color = !focused ? "#BDBDBD" : "#FF6C00";
    return `<svg viewBox="0 0 24 24" fill="none" >
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
};
export const logoutIcon = (focused:any) => {
    const color = focused ? "red" : "red";
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${color}" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
  </svg>
  `;
};
export const houseIcon = (focused:any, isDark:boolean) => {
    const { colors } = useTheme();
    const color = focused ? colors.primary : colors.icon;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${color}" class="bi bi-house-fill" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
  </svg>
  `;
};
export const trashIcon = (focused:any) => {
    const color = !focused ? "#BDBDBD" : "#FFF";
    return `<svg viewBox="0 0 24 24" fill="none" >
  <path d="M3 6H5H21" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z" fill="${color}"/>
  <path d="M10 11V17" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 11V17" stroke="${color}" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
};
export const userIcon = (focused:any, isDark:boolean) => {
    const color = !focused ? (isDark ? "#BDBDBD" : "#212121") : "#FFF";
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
  </svg>
  `;
};
export const educationIcon = (focused:any, isDark:boolean) => {
    const { colors } = useTheme();
    const color = focused ? colors.primary : colors.icon;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${color}" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
  </svg>
  `;
};
export const scheduleIcon = (focused:any, isDark:boolean) => {
    const { colors } = useTheme();
    const color = focused ? colors.primary : colors.icon;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${color}" class="bi bi-calendar-week-fill" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  </svg>
  `;
};
export const profileIcon = (focused:any, isDark:boolean) => {
    const { colors } = useTheme();
    const color = focused ? colors.primary : colors.icon;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${color}" class="bi bi-person-fill" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
  </svg>
  `;
};

export const createIcon = (focused:any, isDark:boolean) => {
    const { colors } = useTheme();
    const color = focused ? colors.primary : colors.icon;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${color}" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>
  `;
};


export const photoIcon = (focused:any, inversia:any) => {
    let color = !focused ? "#BDBDBD" : "#FF6C00";
    if (inversia) {
        color = focused ? "#BDBDBD" : "#FFF";
    }

    return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_36_0)">
  <path d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z" fill="${color}" />
  <path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="${color}" />
  </g>
  <defs>
  <clipPath id="clip0_36_0">
  <rect width="24" height="24" fill="white" />
  </clipPath>
  </defs>
  </svg>
  `;
};
export const arrowUpIcon = (focused:any) => {
    let color = !focused ? "#fff" : "#FF6C00";
    return `<svg width="12" height="16" viewBox="0 0 12 16" fill="none">
  <path d="M6 1L6.35355 0.646447C6.15829 0.451184 5.84171 0.451184 5.64645 0.646447L6 1ZM10.6464 6.35355C10.8417 6.54882 11.1583 6.54882 11.3536 6.35355C11.5488 6.15829 11.5488 5.84171 11.3536 5.64645L10.6464 6.35355ZM0.646447 5.64645C0.451184 5.84171 0.451184 6.15829 0.646447 6.35355C0.841709 6.54882 1.15829 6.54882 1.35355 6.35355L0.646447 5.64645ZM5.5 15C5.5 15.2761 5.72386 15.5 6 15.5C6.27614 15.5 6.5 15.2761 6.5 15H5.5ZM5.64645 1.35355L10.6464 6.35355L11.3536 5.64645L6.35355 0.646447L5.64645 1.35355ZM5.64645 0.646447L0.646447 5.64645L1.35355 6.35355L6.35355 1.35355L5.64645 0.646447ZM5.5 1V8H6.5V1H5.5ZM5.5 8V15H6.5V8H5.5Z" fill="${color}"/>
  </svg>`;
};
export const langIcon = (focused:any) => {
    let color = !focused ? "#BDBDBD" : "#FF6C00";
    return `<svg
   width="24" height="24" viewBox="0 0 24.000000 24.000000">
  
  <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
  fill="${color}" stroke="none">
  <path d="M70 228 c-33 -18 -70 -75 -70 -108 0 -33 37 -90 70 -108 40 -21 101
  -8 132 27 49 55 49 107 0 162 -31 35 -92 48 -132 27z m20 -28 c-11 -20 -40
  -28 -40 -10 0 9 28 29 43 30 4 0 3 -9 -3 -20z m81 10 c22 -13 25 -30 4 -30 -8
  0 -19 9 -25 20 -12 23 -7 25 21 10z m-37 -16 c9 -23 8 -24 -14 -24 -11 0 -20
  2 -20 4 0 12 13 36 20 36 4 0 11 -7 14 -16z m-66 -47 c3 -12 -3 -17 -22 -17
  -25 0 -35 18 -19 34 12 12 38 2 41 -17z m150 0 c3 -12 -3 -17 -22 -17 -25 0
  -35 18 -19 34 12 12 38 2 41 -17z m-68 -4 c0 -8 -12 -13 -30 -13 -18 0 -30 5
  -30 13 0 8 12 14 30 14 18 0 30 -6 30 -14z m-82 -50 c-4 -23 -42 -23 -46 0 -3
  13 3 17 23 17 20 0 26 -4 23 -17z m82 4 c0 -8 -12 -14 -30 -14 -18 0 -30 6
  -30 14 0 8 12 13 30 13 18 0 30 -5 30 -13z m68 -4 c-2 -10 -12 -18 -23 -18
  -11 0 -21 8 -23 18 -3 13 3 17 23 17 20 0 26 -4 23 -17z m-78 -30 c0 -5 -5
  -15 -10 -23 -9 -13 -11 -13 -20 0 -15 22 -12 30 10 30 11 0 20 -3 20 -7z m-50
  -23 c6 -11 8 -20 5 -20 -14 0 -45 21 -45 30 0 18 29 10 40 -10z m100 10 c0 -9
  -31 -30 -45 -30 -3 0 -1 9 5 20 11 20 40 28 40 10z"/>
  </g>
  </svg>`;
};