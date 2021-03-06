import { MaterialIconsEnum } from '../../../services/icons/enums/material-icons.enum';
import { HomeConfigurationCategoryInterface } from '../interfaces/home-configuration-category.interface';

export const HomeConfigurationCategories: HomeConfigurationCategoryInterface[] = [
  {
    name: 'Angular',
    items: [
      {
        label: 'Scaffolding',
        description: 'The skeleton of the project and the way the files are named and organized provide a consistent and logic way to ' +
          'split the files but keep it simple and focus on modularity.',
        icon: MaterialIconsEnum.DOCUMENTS_FOLDER
      },
      {
        label: 'Linters',
        description: 'The project is configured with TSLint and Stylelint to cover most of the files. The rules are customized homemade ' +
          'to provide a strict code without being a huge pain in the ass.',
        icon: MaterialIconsEnum.RULES
      },
      {
        label: 'HMR',
        description: 'The Hot Module Replacement is useful to speedup the development time by recompiling only changed files. This ' +
          'should be configured for each Angular project without a doubt.',
        icon: MaterialIconsEnum.SPEED
      },
      {
        label: 'Lazy loading',
        description: 'The Lazy loading will load only modules which are used by the current app route. This allow the app and webpack ' +
          'to load the files only when it is required to do so. This is a good practice to reduce the chunk size and decrease the time ' +
          'required to have access to the first app screen.',
        icon: MaterialIconsEnum.CUBE
      }
    ]
  },
  {
    name: 'Angular Material',
    items: [
      {
        label: 'Layout',
        description: 'As you might see, this project use Angular Material to provide a consistent and fast way to design the ' +
          'content and you can check out the whole configuration and some examples on how use it and customize it.',
        icon: MaterialIconsEnum.WEB_DESIGN
      },
      {
        label: 'Icons',
        description: 'This project is configured to use custom icons as SVG to increase customization and to reduce the size of the ' +
          'bundle when you use ligatures.',
        icon: MaterialIconsEnum.CREATE_ICON
      }
    ]
  },
  {
    name: 'Logs',
    items: [
      {
        label: 'NGX Logger',
        description: 'This project use a third party library to wrap all the logs to easily manage them between environments. It also ' +
          'allows to send the logs directly to a server.',
        icon: MaterialIconsEnum.INDEX
      }
    ]
  }
];
