import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './DATA.json';
const uuidv1 = require('uuid/v1');
class App extends Component {

 //--------------------------------------------------------------------TÌM KIẾM THÀNH VIÊN -------------------------------------------------------------------------------//
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      // dữ liệu chưa có gì 
      Searchtext : '',

//--------------------------------------------------------------------STATE của sửa thông tin ---------------------------------------------------------------------------------//
      // đẩy thông tin vào form sửa cần có 1 state
      editUserStatus : false,
//--------------------------------------------------------------------end STATE của sửa thông tin ----------------------------------------------------------------------------//

//--------------------------------------------------------------------STATE của sửa thông tin - đưa thông tin vào ô sửa ------------------------------------------------------//
      // đặt cho nó trạng thái {} để tí chuyển user vào hàm
      UserEditObject : {}
//--------------------------------------------------------------------end STATE của sửa thông tin - đưa thông tin vào ô sửa --------------------------------------------------//


    }
  }


  // khâu đóng gói nội dung gửi lên app
  Getnewuserdata = (name , tel , permission) => {
    var item = {}
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    var items = this.state.data;
    items.push(item);
    // thêm dữ liệu vào json
    this.setState({
      data : items
    });
    // console.log(items);
    localStorage.setItem("userData",JSON.stringify(items));
  }
  

 //-------------------------------------------------------------------- END THÊM THÀNH VIÊN ----------------------------------------------------------------------------//



 //--------------------------------------------------------------------  SỬA NỘI DUNG ----------------------------------------------------------------------------//


  //-------------------------------------------------------------------- END SỬA NỘI DUNG ----------------------------------------------------------------------------//




  //--------------------------------------------------------------------- đẩy nội dung vừa nhập thay đổi vào data ------------------------------------------------------//

//--------------------------------------------------------------------- endl đẩy nội dung vừa nhập thay đổi vào data ---------------------------------------------------//


//--------------------------------------------------------------------- xóa phần từ bằng hàm filter của ES2015 ---------------------------------------------------//

//--------------------------------------------------------------------- endl xóa phần từ bằng hàm filter của ES2015 ---------------------------------------------------//


//--------------------------------------------------------------------- localstorage---------------------------------------------------//


componentWillMount() {
  // kiểm tra xem có localStorage chưa
  // console.log(localStorage.getItem("dataUser"));
  if(localStorage.getItem("userData") === null)
  {
    localStorage.setItem("userData",JSON.stringify(DataUser));
  }
  else{
    var temp = JSON.parse(localStorage.getItem("userData"));
    this.setState({
      data : temp
    });

  }
}




//--------------------------------------------------------------------- end localstorage---------------------------------------------------//







 // ------------------------------------------------------------------ kết quả tìm kiếm -------------------------------------------------------------------------------//
  render() {

  // localStorage.setItem("dataUser",JSON.stringify(DataUser));


    // // tạo mới local storage
    // localStorage.setItem("key 1","hehe tôi tên tuân");
    // // mở thằng localstrorage 
    // localStorage.getItem("key 1");
    // // xóa thằng localstorage
    // localStorage.removeItem("key 1");






    // tìm phần tử để đối chiếu so sánh vs từ khóa ta vừa nhập ở search nếu 
    // trùng nhau thì ta in nó ra thông tin người đó
    // nếu không trùng nhau thì thông báo không có gì
      var ketqua = [];
        this.state.data.forEach((item) => {
          //forEach nó duyệt từng phần tử trong mảng json
          // search text là giá trị vừa điền vào 
          // indexOf là 1 hàm tìm kiếm ở javascript
          // !== -1 : có phần từ   [trong javascript không có phần từ sẽ báo -1]
          if(item.name.indexOf(this.state.Searchtext) !== -1){
            // nếu dl nó trùng vs từ name
            // push đẩy vào
            ketqua.push(item);
          }
        });

        // sau khi tìm kiếm thành công thì từ khóa nhập sẽ được in ra
        // vào biến kết quả

 // ------------------------------------------------------------------end kết quả tìm kiếm -----------------------------------------------------------------------------//
    return (
      
      <div>
        <Header/>

        <div className="search-form">
          <div className="container">
            <div className="row">

             

                <div className="col-12">
                  <hr/>
                </div>

                <TableData 
                ClickButtonDelete={(idUser) => {this.ClickButtonDelete(idUser)}}
                 TEST={(user) => this.EditFuction(user)} 
                 dataUserprop={ketqua} 
                 changeEditUserStatus={() => {this.changeEditUserStatus()}}
                 />
                
                <AddUser add={(name,tel,permission) => this.Getnewuserdata(name,tel,permission)}  dataUserprop2={ketqua} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
