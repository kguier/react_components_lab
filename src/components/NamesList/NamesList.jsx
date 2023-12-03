const NamesList = ({}) => {
  const names = [
    { firstName: "Carol", lastName: "Park" },
    { firstName: "Katie", lastName: "Pierce" },
    { firstName: "Garrett", lastName: "Guier" },
    { firstName: "Daphne", lastName: "Guier-Park" },
  ];
  return (
    <header>
      <h1>{displayedName}</h1>
    </header>
  );
};

export default NamesList;
