const MenuIcon = ({rx,fill}:{rx:string,fill:string}) => {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40" fill={fill}>
      <rect width="100" height="20" rx={rx ? rx : '0'}></rect>
      <rect y="30" width="100" height="20" rx={rx ? rx : '0'}></rect>
      <rect y="60" width="100" height="20" rx={rx ? rx : '0'}></rect>
    </svg>
  );
}

export default MenuIcon;