import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import GlobalSearchComponent from './SearchComponent';
import './style/style';


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			loading: true
		}
	}

	componentDidMount() {
		const url = "https://reqres.in/api/users";
		axios.get(url)
			.then(Response =>
				this.setState({
          data: Response.data.data,
          loading:false
				}))
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}

	handleSetData = data => {
		console.log(data);
		this.setState({ data });
	  };

	render() {
		const { data } = this.state;
		const columns = [{
			Header: 'Id',
			accessor: 'id'
		}, {
			Header: 'First Name',
			accessor: 'first_name'
		}, {
			Header: 'Last Name',
			accessor: 'last_name'
		}, {
			Header: 'Email',
			accessor: 'email'
		}]

		return (<div>
      <h1>React Table Demo</h1>
			<GlobalSearchComponent
				data={this.state.data}
				handleSetData={this.handleSetData}
			/>
			<ReactTable
				filterable
				/* defaultFilterMethod={(filter, row) => {
					console.log("filter")
					String(row[filter.id]) === filter.value
				}} */

				className="-striped -highlight"
				showPagination={true}
				loading={this.state.loading}
				showPaginationTop={false}
				defaultPageSize={2}
				showPageSizeOptions={true}
				pageSizeOptions={[2, 4, 6, 8]}
				data={data}
				columns={columns}

			/>
		</div>)
	}
}


export default App;