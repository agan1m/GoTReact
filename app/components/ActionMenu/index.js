import React, { Component, Fragment } from 'react';
import Torch from '../Icons/Torch';
import Helmet from '../Icons/Helmet';
import Crown from '../Icons/Crown';
import Axe from '../Icons/Axe';
import Fist from '../Icons/Fist';
import { ActionMenuWrapper } from './Wrappers';
/* eslint-disable */
class ActionMenu extends Component {
  componentDidUpdate(prevProps, prevState) {
    const {
      showDefenceMenu,
      showCrownMenu,
      showSupportMenu,
      showMoveMenu,
      showTorchMenu,
    } = this.state;
    const { showActionMenu } = this.props;
    if (
      !showActionMenu &&
      prevProps.showActionMenu &&
      (showDefenceMenu ||
        showCrownMenu ||
        showSupportMenu ||
        showMoveMenu ||
        showTorchMenu)
    ) {
      this.setState({
        showDefenceMenu: false,
        showCrownMenu: false,
        showSupportMenu: false,
        showMoveMenu: false,
        showTorchMenu: false,
      });
    }
  }
  state = {
    showDefenceMenu: false,
    showCrownMenu: false,
    showSupportMenu: false,
    showMoveMenu: false,
    showTorchMenu: false,
  };
  _handlerClickMenu = () => {
    const { setShowActionMenu } = this.props;
    this.setState(
      {
        showDefenceMenu: false,
        showCrownMenu: false,
        showSupportMenu: false,
        showMoveMenu: false,
        showTorchMenu: false,
      },
      () => setShowActionMenu(false),
    );
  };

  _handlerClickAction = (ev, attr) => {
    ev.stopPropagation();
    this.setState({ [attr]: true });
  };

  render() {
    const {
      showMoveMenu,
      showCrownMenu,
      showDefenceMenu,
      showTorchMenu,
      showSupportMenu,
    } = this.state;
    const { left, top, showActionMenu } = this.props;
    return (
      <ActionMenuWrapper left={left} top={top} className="container">
        <input
          style={{ display: 'none' }}
          type="checkbox"
          checked={showActionMenu}
          id="actionMenuButton"
        />
        <div className="actions-menu" onClick={this._handlerClickMenu}>
          <button
            style={{
              display: `${
                showDefenceMenu ||
                showSupportMenu ||
                showMoveMenu ||
                showCrownMenu
                  ? 'none'
                  : 'block'
              }`,
            }}
            onClick={ev => this._handlerClickAction(ev, 'showTorchMenu')}
            className="btn btn--torch"
          >
            <Torch />
          </button>
          <button
            style={{
              display: `${
                showTorchMenu ||
                showSupportMenu ||
                showMoveMenu ||
                showCrownMenu
                  ? 'none'
                  : 'block'
              }`,
            }}
            onClick={ev => this._handlerClickAction(ev, 'showDefenceMenu')}
            className="btn btn--helmet"
          >
            <Helmet />
          </button>
          <button
            style={{
              display: `${
                showDefenceMenu ||
                showSupportMenu ||
                showMoveMenu ||
                showTorchMenu
                  ? 'none'
                  : 'block'
              }`,
            }}
            onClick={ev => this._handlerClickAction(ev, 'showCrownMenu')}
            className="btn btn--crown"
          >
            <Crown />
          </button>
          <button
            style={{
              display: `${
                showDefenceMenu ||
                showSupportMenu ||
                showCrownMenu ||
                showTorchMenu
                  ? 'none'
                  : 'block'
              }`,
            }}
            onClick={ev => this._handlerClickAction(ev, 'showMoveMenu')}
            className="btn btn--axe"
          >
            <Axe />
          </button>
          <button
            style={{
              display: `${
                showDefenceMenu ||
                showMoveMenu ||
                showCrownMenu ||
                showTorchMenu
                  ? 'none'
                  : 'block'
              }`,
            }}
            onClick={ev => this._handlerClickAction(ev, 'showSupportMenu')}
            className="btn btn--fist"
          >
            <Fist />
          </button>
          <label
            htmlFor="actionMenuButton"
            className="btn btn--large btn--menu btn-center"
          />
          {showMoveMenu ? (
            <Fragment>
              <button style={{ top: '-50px' }} className="btn btn--sub">
                <Axe width={35} />
                <span>-1</span>
              </button>
              <button
                style={{ top: '-50px', left: 130 }}
                className="btn btn--sub"
              >
                <Axe width={35} />
                <span>0</span>
              </button>
              <button
                style={{ top: '-105px', left: 105 }}
                className="btn btn--sub"
              >
                <Axe width={35} />
                <span>+1</span>
              </button>
              <button
                style={{ top: '-105px', left: 40 }}
                className="btn btn--sub"
              >
                <Axe width={35} />
                <span>+1</span>
              </button>
            </Fragment>
          ) : null}
        </div>
      </ActionMenuWrapper>
    );
  }
}

export default ActionMenu;
