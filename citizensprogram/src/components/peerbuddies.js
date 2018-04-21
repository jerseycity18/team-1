import React, { Component } from 'react';
import { Table, Button, Model } from 'antd';
import { Modal } from 'antd';

const data = [{
  key: '1',
  name: 'Jeef',
  gender: 'M',
  age: 32,
  Interests: 'Movies, Singing, Baseball',
  email: 'Jeff@gmail.com',
  address: 'New York No. 1 Lake Park',
  phone: '201225552',
}];

const volundata = [{
  key: '1',
  rank: 1,
  name: 'Mike',
  age: 19,
  address: '10 Downing Street',
  match: '90%',
  wait: '100 days',
  proximity: '3 miles'
},
{
  key: '2',
  rank: 2,
  name: 'Janet',
  age: 45,
  address: '40 Newport Parkway',
  match: '75%',
  wait: '40 days',
  proximity: '4 miles'
},
{
  key: '1',
  rank: 3,
  name: 'Jack',
  age: 32,
  address: '30 Newport Parkway',
  match: '70%',
  wait: '30 days',
  proximity: '5 miles'
}
];

const voluncolumns = [
{
  title: 'Rank',
  dataIndex: 'rank',
  key: 'rank',
},
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Match',
  dataIndex: 'match',
  key: 'match',
},{
  title: 'Wait',
  dataIndex: 'wait',
  key: 'wait',
},{
  title: 'Proximity',
  dataIndex: 'proximity',
  key: 'proximity',
}
];

class Peerbuddies extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender'},
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    },
    {
    	title: 'Match',
    	dataIndex: '',
    	key: 'x',
    	render: () =>
    		<div>
        		<Button type="primary" onClick={this.showModal}>Match Peer Buddies</Button>
		        <Modal
		          title="Jeff "
		          visible={this.state.visible}
		          onOk={this.handleOk}
		          onCancel={this.handleCancel}
              width="80vw"
		        >
              <div><b>Age: 32</b></div>
              <div><b>Interests: Movies, Singing, Baseball</b></div>
              <div><b>Address: 'New York No. 1 Lake Park'</b></div>
              <div><b>Poximity: 5 miles</b></div><br/>
              <Table dataSource={volundata} columns={voluncolumns} />
              <img src="https://www.gens1.com/janet/Picture1.png" style={{width:"75%", marginLeft:"12.5%"}}/>
		        </Modal>
		      </div>
    },
    ];
    return (
      <div>
        <div className="table-operations">
          {/*<Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>*/}
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Peerbuddies;
