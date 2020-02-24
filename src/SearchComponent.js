import React from "react";

export default class GlobalSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: [],
      searchInput: ""
    };
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () =>
     this.globalSearch()
    );
  };

  globalSearch = () => {
    let { searchInput } = this.state;
    //console.log(this.props.data)
     let filteredData = this.props.data.filter(value => {
      return (
        //   console.log(value.first_name);
          value.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.last_name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    this.props.handleSetData(
      (filteredData.length > 0 && filteredData) || searchInput
        ? filteredData
        : this.props.data
    );
  };

  render() {
    return (
      <>Search
        <br />
        <input
          name="searchInput"
          value={this.state.searchInput || ""}
          onBlur={this.handleChange}
          onChange={this.handleChange}
        />
        <br />
        <br />
      </>
    );
  }
}
