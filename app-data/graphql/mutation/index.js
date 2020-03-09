import gql from 'graphql-tag';

export const toggleMenuMutation = gql`
  mutation toggleMenu($menuIsOpen: Boolean!) {
    toggleMenu(menuIsOpen: $menuIsOpen) @client
  }
`;
