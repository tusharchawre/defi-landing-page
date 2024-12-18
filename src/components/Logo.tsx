interface LogoProps {
  className?: string
}


const Logo = ({className}: LogoProps) => {
    return (
      <div className={`${className || ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">

          <circle cx="16" cy="16" r="8" fill="white" fillOpacity="0.1" stroke="" strokeWidth="2" />
          
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16ZM19.4575 28.5352C18.3566 28.8382 17.1972 29 16 29C8.8203 29 3 23.1797 3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 17.1972 28.8382 18.3566 28.5352 19.4575C28.4933 14.5229 24.4801 10.5355 19.5355 10.5355C14.565 10.5355 10.5355 14.565 10.5355 19.5355C10.5355 24.4801 14.5229 28.4933 19.4575 28.5352ZM27.5355 19.5355C27.5355 23.9538 23.9538 27.5355 19.5355 27.5355C15.1172 27.5355 11.5355 23.9538 11.5355 19.5355C11.5355 15.1172 15.1172 11.5355 19.5355 11.5355C23.9538 11.5355 27.5355 15.1172 27.5355 19.5355Z"
            fill="white"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  };
  
  export default Logo;
  