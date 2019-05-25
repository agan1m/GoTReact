import styled from 'styled-components';

export const ActionMenuWrapper = styled.div`
  position: absolute;
  left: ${props => `${props.left - 40}px`};
  top: ${props => `${props.top - 120}px`};
  .btn {
    background: #e74c3c;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }
  .btn svg {
    position: relative;
    top: 1px;
    right: 1px;
  }
  .btn--large {
    width: 60px;
    height: 60px;
  }
  .btn--torch {
    background: #fff;
  }
  .btn--helmet {
    background: #2ecc71;
  }
  .btn--crown {
    background: #16a085;
  }
  .actions-menu {
    position: absolute;
    width: 60px;
    height: 60px;
    left: 0;
    top: 0;
  }
  .actions-menu .btn {
    position: absolute;
    top: 8px;
    left: 8px;
    opacity: 0;
    transition: top 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 200ms;
  }
  .actions-menu .btn--menu {
    position: absolute;
    opacity: 1;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .btn--menu,
  #actionMenuButton:checked + .actions-menu > .btn {
    opacity: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
  #actionMenuButton:checked + .actions-menu > .btn--menu:after {
    transform: rotate(45deg);
  }
  #actionMenuButton:checked + .actions-menu > .btn--menu:before {
    transform: rotate(-45deg);
  }
  #actionMenuButton:checked + .actions-menu > .btn--torch {
    top: -70px;
  }
  #actionMenuButton:checked + .actions-menu > .btn--helmet {
    top: -50px;
    left: -50px;
  }
  #actionMenuButton:checked + .actions-menu > .btn--crown {
    left: -70px;
  }
  #actionMenuButton:checked + .actions-menu > .btn--axe {
    top: -50px;
    left: 70px;
  }
  #actionMenuButton:checked + .actions-menu > .btn--fist {
    left: 85px;
  }
  .btn-center {
    width: 0;
  }
  #actionMenuButton:checked + .actions-menu > .btn--sub {
    position: absolute;
    display: flex;
    font-size: 13px;
    top: 8px;
    left: 8px;
    opacity: 1;
    transition: top 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 200ms;
  }
`;
