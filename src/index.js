import * as loader from './controller';

const menu = document.getElementById('menu');



menu.addEventListener('click', e => {
  e.preventDefault();
  selectActions(e)
});

const selectActions = e => {
  console.log(e.target.id);
  
  let menuChoice = e.target.id

  switch (menuChoice) {
    case 'new':
      console.log('clicked on','new');
      loader.createNewProject();
      break;
    case 'default':
      console.log('clicked on','default');
      //loader.editDefaultProject();
      break;
    case 'projects':
      console.log('clicked on','projects');
      //loader.RenderAllProjects()
      break;
  }
};





