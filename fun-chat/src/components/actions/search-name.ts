export const searchName = (name: HTMLElement | undefined) => {
  const input = document.getElementById('search');
  const active = document.querySelectorAll('.users_active');
  const inactive = document.querySelectorAll('.users_inactive');
  input?.addEventListener('input', (e) => {
    if (input != null && input instanceof HTMLInputElement) {
      e.preventDefault();
      const search = input.value;
      const allUsers = Array.from(active).concat(Array.from(inactive));
      if (name !== undefined) {
        allUsers.push(name);
      }
      for (let i = 0; i < allUsers.length; i += 1) {
        if (!allUsers[i].innerHTML.includes(search)) {
          (allUsers[i] as HTMLElement).style.display = 'none';
        } else {
          (allUsers[i] as HTMLElement).style.display = '';
        }
      }
    }
  });
};
