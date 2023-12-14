const ParentDiv = ({ children, style }) => {
  return (
    <div
      className="relative h-full parent cursor-pointer  parent bg-theme rounded-2xlt"
      style={style}
    >
      {children}
    </div>
  );
};

export default ParentDiv;
