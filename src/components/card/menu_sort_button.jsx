export const MenuSortButton = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-auto px-3 py-1 rounded-md bg-primary text-grey shadow-sm shadow-grey/10 border border-grey/20 ${
        isActive && "bg-secondary/90 text-primary"
      }`}
    >
      {text}
    </button>
  );
};
