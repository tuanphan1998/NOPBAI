import React, { Component } from 'react';


class AddUser extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            trangthai : true,
          
        }
    }

        // lấy dữ liệu nhập vào là gì đã
        isChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            
            // đẩy toàn bộ giá trị vào state
            this.setState({
                [name]:value
            });
        }
        
    

    thaydoitrangthai = () => {
        this.setState({
            trangthai : !this.state.trangthai
        });
    }
    
    hienthinut = () => {
        if(this.state.trangthai === true)
        {
           
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thaydoitrangthai()}>Đóng lại</div>;
        }
        else
        {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.thaydoitrangthai()}>Thêm mới</div>;
        }
    }

  
    mappingdatauser = ()  =>(
        this.props.dataUserprop2.map((value , key) => {
            if(value.id % 2)
            {
                   
                    return(  
                    
                        
                          <td>
                              {value.name}
                              </td>
                          
                    
                    )
            }
        })     
  )
  tinhtoanMang = () => {
      var Array = [];
      var giatri = 0;
      let mang =  JSON.parse(localStorage.getItem('userData'));
        mang.forEach(element => {
              if(element.id % 2)
              {
                Array.push(element);
                giatri += element.permission;
                console.log(giatri);
              }
        });
    return(giatri);
  }
  tinhtoanMang2 = () => {
    var Array = [];
   
    var giatri = 0;
    let mang =  JSON.parse(localStorage.getItem('userData'));
      mang.forEach(element => {
            if(!(element.id % 2))
            {
              Array.push(element.permission);
              giatri += element.permission;
              console.log(giatri);
            }
      });
      return(giatri);
}


 
      
    

  mappingdatauser2 = ()  =>(
    this.props.dataUserprop2.map((value , key) => {
        if(!(value.id % 2))
        {
                return(  <td>{value.name}</td>)
        }
    })     
)
  
    
    


    hienthiform = () => {
        if(this.state.trangthai === true)
        {
            return (
                <form>
                    <div className="card text-left">
                        <div className="card text-white bg-primary">
                        <div className="card-header">Tính toán số cặp</div>
                        <div className="card-body">
                            <div className="form-group">
                                cặp lẻ
                            <table border={1}>
                                <tr>
                                    {this.mappingdatauser()}
                                </tr>
                            </table>
                            Max : {this.tinhtoanMang()}

                           <br/>
                            cặp chẵn
                            <table border={1}>
                                <tr>
                                    {this.mappingdatauser2()}
                                </tr>
                            </table>
                            Max : {this.tinhtoanMang2()}
                            </div>
                           
                        </div>
                        </div>
                    </div>
                </form>
            )
        }
    }

  

    

    render() {
      
       
        return (
            <div className="col-3">

           {
               this.hienthinut()
           }
           {
               this.hienthiform()
           }
              
            </div>

        );
    }
}

export default AddUser;
