export const onInputChange =( e, setState) => {
    const { name, value } = e.target;
  
    setState((prev) => ({ ...prev, [name]: value }));
  };
  