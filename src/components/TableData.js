import React, { Component } from 'react';
import Tabledatarow from './Tabledatarow';

class TableData extends Component {

  ClickButtonDelete = (idUser) => {
      this.props.ClickButtonDelete(idUser);
  }


  mappingdatauser = () => this.props.dataUserprop.map((value,key) =>(
      <Tabledatarow 
      ClickButtonDelete = {(idUser) => {this.ClickButtonDelete(idUser)}} 
      TEST2={(user) => this.props.TEST(value)}
       id={value.id}  
       key={key} 
       username={value.name} 
       stt={key} 
       tel={value.tel} 
       per={value.permission} 
       changeEditUserStatus={() => {this.props.changeEditUserStatus()}} />
))
  


    render() {
        return (
<div className="col-9">
  <table className="table table-striped table-hover table-{1:striped|sm|bordered|hover|inverse}">
    <thead className="thead-inverse|thead-default">
      <tr>
        <th>STT</th>
        <th>Tên cặp</th>
        <th>Điện Thoại</th>
        <th>Số công</th>
      </tr>
    </thead>
    <tbody>
         {
            this.mappingdatauser()
         }
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;