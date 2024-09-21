export const LSLogo = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Fondo circular */}
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />

    {/* Letra L */}
    <path
      d="M30 20 V70 H50"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Letra S */}
    <path
      d="M70 30 C60 20, 40 20, 40 40 C40 60, 70 60, 70 80 C70 90, 40 90, 40 80"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
