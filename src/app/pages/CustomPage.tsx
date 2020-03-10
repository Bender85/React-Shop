import * as React from "react";
import {connect} from "react-redux";
import {stylesheet} from "typestyle";

const classNames = stylesheet({
  customPage: {
    background: "#ccc",
    textAlign: "center"
  }
});


class CustomPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={classNames.customPage}>
        My custom page
      </div>
    );
  }
}

const connected = connect()(CustomPage);
export {connected as CustomPage, CustomPage as UnconnectedCounterPage};
