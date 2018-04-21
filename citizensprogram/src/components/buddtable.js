import React, { Component } from 'react';
import { Table, Button, Model } from 'antd';
import { Modal } from 'antd';

const data = [{
  key: '1',
  name: 'John Brown',
  gender: 'M',
  age: 32,
  email: 'john@gmail.com',
  phone: 2015552222
}, {
  key: '2',
  name: 'Jim Green',
  gender: 'M',
  age: 42,
  email: 'jim@gmail.com',
  phone: 2015553333
}, {
  key: '3',
  name: 'Joe Black',
  gender: 'M',
  age: 32,
  email: 'john@gmail.com',
  phone: 2015554444
}, {
  key: '4',
  name: 'Jane',
  gender: 'F',
  age: 32,
  email: 'john@gmail.com',
  phone: 2015553333
}];

class Buddtable extends React.Component {
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
      key: 'gender'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    },
	{
      title: 'email',
      dataIndex: 'email',
      key: 'email'
    },
	{
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
    	title: 'Match',
    	dataIndex: '',
    	key: 'x',
    	render: () =>
    		<div>
        		<Button type="primary" onClick={this.showModal}>Match Buddies</Button>
		        <Modal
		          title="Match Peer Buddies"
		          visible={this.state.visible}
		          onOk={this.handleOk}
		          onCancel={this.handleCancel}
		        >
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		          <p>Some contents...</p>
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

export default Buddtable;
