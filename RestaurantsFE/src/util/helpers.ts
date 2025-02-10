export const restrictNumbers = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' ||
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight'
    ) {
      return;
    }
    if (e.key < '0' || e.key > '9') {
      e.preventDefault();
    }
  };